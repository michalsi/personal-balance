const formatCurrency = require('./currencyFormater');
const { printHeader, printFooter } = require('./sectionPrinter');

function printIncomes(cashFlow) {
  printHeader('INCOME SUMMARY: ');
  cashFlow.income.forEach((income, value) => {
    console.log(`${value} \t ${formatCurrency(income)}`);
  });
  printFooter();
}

module.exports = printIncomes;
