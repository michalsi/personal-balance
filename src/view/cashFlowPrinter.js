function formatCashFlow(cashFlow, cashFlowPart) {
    console.log("----------------------");
    cashFlow[cashFlowPart].forEach(function (value, key) {
        console.log(key + "\t" + value)
    });
    console.log("\n");
}

function printCashFLow(cashFlow) {
    console.log("WYDATKI");
    formatCashFlow(cashFlow, 'income');

    console.log("WPŁYWY");
    formatCashFlow(cashFlow, 'expense');
}

module.exports = exports = printCashFLow;