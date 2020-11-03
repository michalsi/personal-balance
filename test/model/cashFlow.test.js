const CashFlow = require('../../src/model/cashFlow');

describe('Cash Flow model tests', () => {
  test('GIVEN cash flow has been initialised THEN income and expense are set to 0', () => {
    const cashFlow = new CashFlow();
    expect(cashFlow.getAllExpensesValues()).toEqual(0);
    expect(cashFlow.getAllIncomesValues()).toEqual(0);
  });

  test('GIVEN cash flow has been initialised THEN other properties can not be added to the object', () => {
    const newProperty = 'newProperty';
    const cashFlow = new CashFlow();
    cashFlow[newProperty] = 'dummy value';

    expect(newProperty in cashFlow).toBe(false);
  });

  test('GIVEN cash flow has income set with setIncome() method THEN it can be modified with set() method', () => {
    const cashFlow = new CashFlow();
    const incomeCategory = 'dummy income';

    cashFlow.setIncome(incomeCategory, 10);
    cashFlow.income.set(incomeCategory, 20);
    expect(cashFlow.getIncome(incomeCategory)).toEqual(20);
  });

  test('GIVEN cash flow has income set with setExpense() method THEN it can be modified with set() method', () => {
    const cashFlow = new CashFlow();
    const expenseCategory = 'dummy expense';

    cashFlow.setExpense(expenseCategory, 10);
    cashFlow.expense.set(expenseCategory, 20);
    expect(cashFlow.getExpense(expenseCategory)).toEqual(20);
  });

  test('GIVEN cash flow has been initialised THEN multiple expense categories can be added', () => {
    const cashFlow = new CashFlow();
    const expenseCategory1 = 'dummy expense 1';
    const expenseCategory2 = 'dummy expense 2';

    cashFlow.setExpense(expenseCategory1, 10);
    cashFlow.setExpense(expenseCategory2, 20);
    expect(cashFlow.getExpense(expenseCategory1)).toEqual(10);
    expect(cashFlow.getExpense(expenseCategory2)).toEqual(20);
    expect(cashFlow.getAllExpensesValues()).toEqual([10, 20]);
  });

  test('GIVEN cash flow has been initialised THEN multiple income categories can be added', () => {
    const cashFlow = new CashFlow();
    const incomeCategory1 = 'dummy income 1';
    const incomeCategory2 = 'dummy income 2';

    cashFlow.setIncome(incomeCategory1, 30);
    cashFlow.setIncome(incomeCategory2, 40);

    expect(cashFlow.getAllIncomesValues()).toEqual([30, 40]);
  });
});
