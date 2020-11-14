const CashFlow = require('../model/cashFlow');
const IrrelevantGroup = require('../model/irrelevantGroup');

function sortIncome(cashFlow) {
  const sortedIncome = new Map(
    [...cashFlow.income].sort((a, b) => b[1] - a[1])
  );
  cashFlow.replaceAllIncome(sortedIncome);
  return cashFlow;
}

function getCategorisedCashFlow(accountItems) {
  const cashFlow = new CashFlow();
  const irrelevantGroup = new IrrelevantGroup();
  const categoryProp = 'Kategoria';
  const valueProp = 'Kwota';
  let currentCategory;
  let currentValue;

  Object.keys(accountItems).forEach((key) => {
    currentCategory = accountItems[key][categoryProp];
    currentValue = accountItems[key][valueProp];
    if (currentValue) {
      if (irrelevantGroup.getNiewazneCategories().includes(currentCategory)) {
        cashFlow.setIrrelevant(
          currentCategory,
          cashFlow.getIrrelevant(currentCategory) + currentValue
        );
      } else if (currentValue < 0) {
        cashFlow.setExpense(
          currentCategory,
          cashFlow.getExpense(currentCategory) + currentValue
        );
      } else if (currentValue > 0) {
        cashFlow.setIncome(
          currentCategory,
          cashFlow.getIncome(currentCategory) + currentValue
        );
      } else if (currentValue === 0) {
        throw new Error(
          `Following entry has value 0 ! ${JSON.stringify(accountItems[key])}`
        );
      }
    } else
      throw new Error(
        `${accountItems[key]} doesn't have ${categoryProp} property!`
      );
  });
  return sortIncome(cashFlow);
}

module.exports = getCategorisedCashFlow;
