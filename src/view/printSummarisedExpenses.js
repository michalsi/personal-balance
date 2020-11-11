const formatCurrency = require('./currencyFormater');
const { printHeader, printFooter } = require('./sectionPrinter');

function printSummarisedExpenses(summarisedExpenses, groupedExpenses) {
  printHeader('EXPENSES SUMMARY:');
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

module.exports = printSummarisedExpenses;
