const CashFlow = require('../model/cashFlow');

function getCategorisedCashFlow(accountItems) {
  const cashFlow = new CashFlow();
  const categoryProp = 'Kategoria';
  const valueProp = 'Kwota';
  let currentCategory;
  let currentValue;

  Object.keys(accountItems).forEach((key) => {
    currentCategory = accountItems[key][categoryProp];
    currentValue = parseFloat(accountItems[key][valueProp].replace(',', '.'));

    if (currentValue < 0) {
      if (cashFlow.expense.has(currentCategory)) {
        cashFlow.expense.set(currentCategory, cashFlow.expense.get(currentCategory) + currentValue);
      } else {
        cashFlow.expense.set(currentCategory, currentValue);
      }
    }
    if (currentValue > 0) {
      if (cashFlow.income.has(currentCategory)) {
        cashFlow.income.set(currentCategory, cashFlow.income.get(currentCategory) + currentValue);
      } else {
        cashFlow.income.set(currentCategory, currentValue);
      }
    }
    if (currentValue === 0) {
      throw new Error(`Following entry has value 0 ! ${JSON.stringify(accountItems[key])}`);
    }
  });
  return cashFlow;
}

module.exports = getCategorisedCashFlow;
