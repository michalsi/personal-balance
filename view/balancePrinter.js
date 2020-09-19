function formatBalance(balance, balancePart) {
    console.log("----------------------");
    balance[balancePart].forEach(function (value, key) {
        console.log(key + "\t" + value)
    });
    console.log("\n");
}


function printBalance(balance){
    console.log("WYDATKI");
    formatBalance(balance,'income');

    console.log("WPŁYWY");
    formatBalance(balance,'expense');
}


module.exports = exports = printBalance;