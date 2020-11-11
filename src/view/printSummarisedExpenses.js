const formatCurrency = require('./currencyFormater');
const sectionPrinter = require('./sectionPrinter');

function printSummarisedExpenses(summarisedExpenses, groupedExpenses) {
  sectionPrinter.printHeader('EXPENSES SUMMARY:');
  Object.entries(summarisedExpenses).forEach(([category, valueSummarised]) => {
    console.log(`${category} \t ${formatCurrency(valueSummarised)}`);
  });
  sectionPrinter.printFooter();

  Object.entries(groupedExpenses).forEach(([category]) => {
    console.log(category.toUpperCase());

    groupedExpenses[category].forEach((groupedValue, groupCategory) => {
      console.log(`${groupCategory} \t ${formatCurrency(groupedValue)}`);
    });
    console.log('');
  });
}

module.exports = printSummarisedExpenses;
