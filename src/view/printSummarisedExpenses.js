function printSummarisedExpenses(summarisedExpenses, groupedExpenses) {
  console.log('EXPENSES SUMMARY:');
  console.log('===============================');
  Object.entries(summarisedExpenses).forEach(([category, valueSummarised]) => {
    console.log(`${category} \t ${valueSummarised}`);
  });
  console.log('===============================\n');

  Object.entries(groupedExpenses).forEach(([category]) => {
    console.log(category.toUpperCase());

    groupedExpenses[category].forEach((groupedValue, groupCategory) => {
      console.log(`${groupCategory} \t ${groupedValue}`);
    });
    console.log('');
  });
}

module.exports = printSummarisedExpenses;
