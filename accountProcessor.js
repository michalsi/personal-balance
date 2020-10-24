const argv = require('minimist')(process.argv.slice(2));
const getCashFlowFromCsv = require('./src/controllers/csvCashFlowParser');
const getCategorisedCashFlow = require('./src/controllers/cashFlowCategoriser');
const printCashFlowToConsole = require('./src/view/cashFlowPrinter');

function isInputFilePresent() {
  return !!argv.f;
}

if (isInputFilePresent()) {
  try {
    const cashFlow = getCategorisedCashFlow(getCashFlowFromCsv(argv.f));
    printCashFlowToConsole(cashFlow);
  } catch (e) {
    console.error(e);
  }
} else
  console.log(
    'Input file is required. Please provide path to valid CSV file with `-f` argument'
  );
