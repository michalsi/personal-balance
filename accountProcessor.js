const getCashFlowFromCsv = require('./controllers/csvParser');

const argv = require('minimist')(process.argv.slice(2));

function categoriseCashFlow(accountItems) {
    const categoryProp = 'Kategoria';
    const valueTranslated = 'Kwota';

    let currentCategory;
    let numericalValue;
    let currencyValue;

    let balance = {
        income: new Map(),
        expense: new Map()
    };

    for (let prop in accountItems) {
        currentCategory = accountItems[prop][categoryProp];
        currencyValue = accountItems[prop][valueTranslated];
        numericalValue = parseFloat(currencyValue);

        if (numericalValue < 0) {
            if (balance.expense.has(currentCategory)) {
                let currentIncome = balance.expense.get(currentCategory);
                balance.expense.set(currentCategory, currentIncome + numericalValue)

            } else {
                balance.expense.set(currentCategory, numericalValue)
            }
        }
        if (numericalValue > 0) {
            if (balance.income.has(currentCategory)) {
                let currentIncome = balance.income.get(currentCategory);
                balance.income.set(currentCategory, currentIncome + numericalValue)

            } else {
                balance.income.set(currentCategory, numericalValue)
            }
        }
        if (numericalValue === 0) {
            throw 'Folowing entry has value 0 ! ' + JSON.stringify(accountItems[prop]);

        }
    }

    function formatBalance(balancePart) {
        console.log("----------------------");
        balance[balancePart].forEach(function (value, key) {
            console.log(key + "\t" + value)
        });
        console.log("\n");
    }

    console.log("WYDATKI");
    formatBalance('income');

    console.log("WPŁYWY");
    formatBalance('expense');
}

try {

    if (argv.f) {
        categoriseCashFlow(getCashFlowFromCsv(argv.f));
    } else console.log("Provide path to the CSV file that you want to process with '-f' option ")
} catch (e) {
    console.error(e);

}