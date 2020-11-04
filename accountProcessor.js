const argv = require('minimist')(process.argv.slice(2));
const getCashFlowFromCsv = require('./src/controllers/csvLoader');
const getCategorisedCashFlow = require('./src/controllers/cashFlowCategoriser');
const getCashFlowAggregated = require('./src/controllers/expensesAggregator');
const getCashFlowWithParsedCurrency = require('./src/controllers/cashFlowCurrencyParser');
const summariseGroupedExpenses = require('./src/controllers/expensesGroupsSummariser');
const printExpenses = require('./src/view/printSummarisedExpenses');

function isInputFilePresent() {
  return !!argv.f;
}

if (isInputFilePresent()) {
  try {
    const cashFlow = getCategorisedCashFlow(
      getCashFlowWithParsedCurrency(getCashFlowFromCsv(argv.f))
    );

    const groupedExpenses = getCashFlowAggregated(cashFlow);
    const summarisedExpenses = summariseGroupedExpenses(groupedExpenses);
    printExpenses(summarisedExpenses, groupedExpenses);
    // printCashFlowToConsole(cashFlow);
  } catch (e) {
    console.error(e);
  }
} else
  console.log(
    'Input file is required. Please provide path to valid CSV file with `-f` argument'
  );
