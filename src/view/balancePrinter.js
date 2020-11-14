const printHeader = require('./sectionPrinter');

function printBalance(cashFlow) {
  const incomeSummary = [...cashFlow.income.values()].reduce(
    (result, value) => result + value
  );
  const expenseSummary = [...cashFlow.expense.values()].reduce(
    (result, value) => result + value
  );
  printHeader(' INCOME - EXPENSE BALANCE: ', incomeSummary + expenseSummary);
}

module.exports = printBalance;
