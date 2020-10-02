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

  for (const prop in accountItems) {
    currentCategory = accountItems[prop][categoryProp];
    currentValue = parseFloat(accountItems[prop][valueTranslated]);

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
      throw `Folowing entry has value 0 ! ${JSON.stringify(accountItems[prop])}`;
    }
  }
  return balance;
}

module.exports = exports = getCategorisedCashFlow;
