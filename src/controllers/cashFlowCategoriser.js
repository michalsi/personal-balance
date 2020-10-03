const balance = require('../model/cashFlow');

function addToExpenseCategory(currentCategory, currentValue) {
  balance.expense.set(currentCategory, currentValue);
}

function addToIncomeCategory(currentCategory, currentValue) {
  balance.income.set(currentCategory, currentValue);
}

function getCategorisedCashFlow(accountItems) {
  const categoryProp = 'Kategoria';
  const valueTranslated = 'Kwota';
  let currentCategory;
  let currentValue;

  Object.keys(accountItems).forEach((key) => {
    currentCategory = accountItems[key][categoryProp];
    currentValue = parseFloat(accountItems[key][valueTranslated]);

    if (currentValue < 0) {
      if (balance.expense.has(currentCategory)) {
        addToExpenseCategory(currentCategory, balance.expense.get(currentCategory) + currentValue);
      } else {
        addToExpenseCategory(currentCategory, currentValue);
      }
    }
    if (currentValue > 0) {
      if (balance.income.has(currentCategory)) {
        addToIncomeCategory(currentCategory, balance.income.get(currentCategory) + currentValue);
      } else {
        addToIncomeCategory(currentCategory, currentValue);
      }
    }
    if (currentValue === 0) {
      throw new Error(`Following entry has value 0 ! ${JSON.stringify(accountItems[key])}`);
    }
  });
  return balance;
}

module.exports = getCategorisedCashFlow;
