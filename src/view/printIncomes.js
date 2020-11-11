const formatCurrency = require('./currencyFormater');
const sectionPrinter = require('./sectionPrinter');

function printIncomes(cashFlow) {
  sectionPrinter.printHeader('INCOME SUMMARY: ');
  cashFlow.income.forEach((income, value) => {
    console.log(`${value} \t ${formatCurrency(income)}`);
  });
  sectionPrinter.printFooter();
}

module.exports = printIncomes;
