const CashFlowGroups = require('../model/expensesGroupCategories');
const GroupedExpenses = require('../model/groupedExpenses');

function sortExpensesGroup(expensesGroup) {
  const sortedExpenses = {};
  Object.entries(expensesGroup).forEach(([category]) => {
    sortedExpenses[category] = new Map(
      [...expensesGroup[category]].sort((a, b) => a[1] - b[1])
    );
  });
  return sortedExpenses;
}

function aggregateExpenses(cashFlow) {
  const cashFlowGroups = new CashFlowGroups();
  const groupedExpenses = new GroupedExpenses();

  cashFlow.expense.forEach((value, key) => {
    if (cashFlowGroups.getRachunkiCategories().includes(key)) {
      groupedExpenses.addToRachunki(key, value);
    } else if (cashFlowGroups.getCodzienneWydatkiCategories().includes(key)) {
      groupedExpenses.addToCodzienneWydatki(key, value);
    } else if (cashFlowGroups.getOszczednosciCategories().includes(key)) {
      groupedExpenses.addToOszczednosci(key, value);
    } else if (cashFlowGroups.getPomocWsparcieCategories().includes(key)) {
      groupedExpenses.addToPomocWsparcie(key, value);
    } else if (cashFlowGroups.getZachciankiCategories().includes(key)) {
      groupedExpenses.addToZachcianki(key, value);
    } else if (cashFlowGroups.getResztaCategories().includes(key)) {
      groupedExpenses.addToReszta(key, value);
    } else if (cashFlowGroups.getPrzelewWlasnyCategories().includes(key)) {
      groupedExpenses.addToPrzelewWlasny(key, value);
    } else {
      console.log(`Expense "${key}" doesn't match available groups !!`);
    }
  });

  Object.entries(groupedExpenses).forEach(([category]) => {
    groupedExpenses[category] = new Map(
      [...groupedExpenses[category]].sort((a, b) => a[1] - b[1])
    );
  });

  return sortExpensesGroup(groupedExpenses);
}

module.exports = aggregateExpenses;
