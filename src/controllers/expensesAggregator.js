const CashFlowGroups = require('../model/expensesGroupCategories');
const GroupedExpenses = require('../model/groupedExpenses');

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
  return groupedExpenses;
}

module.exports = aggregateExpenses;
