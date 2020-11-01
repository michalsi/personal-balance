const CashFlow = require('../model/cashFlow');

function getCategorisedCashFlow(accountItems) {
  const cashFlow = new CashFlow();
  const categoryProp = 'Kategoria';
  const valueProp = 'Kwota';
  let currentCategory;
  let currentValue;

  Object.keys(accountItems).forEach((key) => {
    currentCategory = accountItems[key][categoryProp];
    currentValue = accountItems[key][valueProp];
    if (currentValue) {
      if (currentValue < 0) {
        cashFlow.setExpense(
          currentCategory,
          cashFlow.getExpense(currentCategory) + currentValue
        );
      }
      if (currentValue > 0) {
        cashFlow.setIncome(
          currentCategory,
          cashFlow.getIncome(currentCategory) + currentValue
        );
      }
      if (currentValue === 0) {
        throw new Error(
          `Following entry has value 0 ! ${JSON.stringify(accountItems[key])}`
        );
      }
    } else
      throw new Error(
        `${accountItems[key]} doesn't have ${categoryProp} property!`
      );
  });
  return cashFlow;
}

module.exports = getCategorisedCashFlow;
