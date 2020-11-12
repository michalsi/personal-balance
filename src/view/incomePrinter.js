const formatCurrency = require('./currencyFormater');
const { printHeader, printFooter } = require('./sectionPrinter');

function incomePrinter(cashFlow) {
  const summary = [...cashFlow.income.values()].reduce(
    (result, value) => result + value
  );
  printHeader('INCOME SUMMARY', summary);
  cashFlow.income.forEach((income, value) => {
    console.log(`${value} \t ${formatCurrency(income)}`);
  });
  printFooter();
}

module.exports = incomePrinter;
