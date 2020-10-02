const getCashFlowFromCsv = require('./src/controllers/csvCashFlowParser');
const getCategorisedCashFlow = require('./src/controllers/cashFlowCategoriser');
const printCashFlowToConsole = require('./src/view/cashFlowPrinter');
const argv = require('minimist')(process.argv.slice(2));

try {
  if (argv.f) {
    const cashFlow = getCategorisedCashFlow(getCashFlowFromCsv(argv.f));
    printCashFlowToConsole(cashFlow);
  } else console.log("Provide path to the CSV file that you want to process with '-f' option ");
} catch (e) {
  console.error(e);
}
