const argv = require('minimist')(process.argv.slice(2));
const getCashFlowFromCsv = require('./src/controllers/csvLoader');
const getCategorisedCashFlow = require('./src/controllers/cashFlowCategoriser');
const getExpensesAggregated = require('./src/controllers/expensesAggregator');
const getCashFlowWithParsedCurrency = require('./src/controllers/cashFlowCurrencyParser');
const summariseGroupedExpenses = require('./src/controllers/expensesGroupsSummariser');
const printBalance = require('./src/view/balancePrinter');
const printExpenses = require('./src/view/summarisedExpensesPrinter');
const printIncomes = require('./src/view/incomePrinter');
const printIrrelevantCategories = require('./src/view/irrelevantCategoriesPrinter');

function isInputFilePresent() {
  return !!argv.f;
}

if (isInputFilePresent()) {
  try {
    const cashFlow = getCategorisedCashFlow(
      getCashFlowWithParsedCurrency(getCashFlowFromCsv(argv.f))
    );

    const groupedExpenses = getExpensesAggregated(cashFlow);
    const summarisedExpenses = summariseGroupedExpenses(groupedExpenses);
    printBalance(cashFlow);
    printExpenses(summarisedExpenses, groupedExpenses);
    printIncomes(cashFlow);
    printIrrelevantCategories(cashFlow);
  } catch (e) {
    console.error(e);
  }
} else
  console.log(
    'Input file is required. Please provide path to valid CSV file with `-f` argument'
  );
