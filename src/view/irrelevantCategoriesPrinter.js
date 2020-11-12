const { printHeader, printFooter } = require('./sectionPrinter');

function printIrrelevantCategories(cashFlow) {
  const summary = [...cashFlow.irrelevant.values()].reduce(
    (result, value) => result + value
  );
  printHeader('IRRELEVANT ENTRIES SUMMARY', summary);

  cashFlow.irrelevant.forEach((value, key) => {
    console.log(`${key} \t ${value}`);
  });

  printFooter();
}

module.exports = printIrrelevantCategories;
