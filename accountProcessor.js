const argv = require('minimist')(process.argv.slice(2));
const getCashFlowFromCsv = require('./src/controllers/csvLoader');
const getCategorisedCashFlow = require('./src/controllers/cashFlowCategoriser');
const printCashFlowToConsole = require('./src/view/cashFlowPrinter');
const getCashFlowWithParsedCurrency = require('./src/controllers/cashFlowCurrencyParser');

function isInputFilePresent() {
  return !!argv.f;
}

if (isInputFilePresent()) {
  try {
    const cashFlow = getCategorisedCashFlow(
      getCashFlowWithParsedCurrency(getCashFlowFromCsv(argv.f))
    );
    printCashFlowToConsole(cashFlow);
  } catch (e) {
    console.error(e);
  }
} else
  console.log(
    'Input file is required. Please provide path to valid CSV file with `-f` argument'
  );
