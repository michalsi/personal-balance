const getCashFlowFromCsv = require('./controllers/csvParser');
const getCategorisedCashFlow = require('./controllers/cashFlowCategoriser');
const printBalance = require('./view/balancePrinter');
const argv = require('minimist')(process.argv.slice(2));

try {
    if (argv.f) {
        let balance = getCategorisedCashFlow(getCashFlowFromCsv(argv.f));
        printBalance(balance);
    } else console.log("Provide path to the CSV file that you want to process with '-f' option ")
} catch (e) {
    console.error(e);

}