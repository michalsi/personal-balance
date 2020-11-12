const formatCurrency = require('./currencyFormater');
const { printHeader, printFooter } = require('./sectionPrinter');

function summarisedExpensesPrinter(summarisedExpenses, groupedExpenses) {
  const summary = Object.values(summarisedExpenses).reduce(
    (result, value) => result + value
  );
  printHeader('EXPENSES SUMMARY', summary);
  Object.entries(summarisedExpenses).forEach(([category, valueSummarised]) => {
    console.log(`${category} \t ${formatCurrency(valueSummarised)}`);
  });
  printFooter();

  Object.entries(groupedExpenses).forEach(([category]) => {
    console.log(category.toUpperCase());

    groupedExpenses[category].forEach((groupedValue, groupCategory) => {
      console.log(`${groupCategory} \t ${formatCurrency(groupedValue)}`);
    });
    console.log('');
  });
}

module.exports = summarisedExpensesPrinter;
