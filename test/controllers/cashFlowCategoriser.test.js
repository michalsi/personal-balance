const cashFlowCategoriser = require('../../src/controllers/cashFlowCategoriser');

describe('Cash flow categoriser tests', () => {
  const expenseValue = -10.99;
  const expenseCategory = 'dummy expense';
  const entryWithSingleExpense = {
    'Data operacji': '2020-08-09',
    'Opis operacji': 'Operation description',
    Rachunek: 'My account',
    Kategoria: expenseCategory,
    Kwota: expenseValue,
  };
  Object.freeze(entryWithSingleExpense);

  const incomeValue = 9.98;
  const incomeCategory = 'dummy income';
  const entryWithSingleIncome = {
    'Data operacji': '2020-08-09',
    'Opis operacji': 'Operation description',
    Rachunek: 'My account',
    Kategoria: incomeCategory,
    Kwota: incomeValue,
  };
  Object.freeze(entryWithSingleIncome);

  test('GIVEN account with single positive value THEN cashflow category is income', () => {
    const accountEntries = [entryWithSingleIncome];

    const cashFlow = cashFlowCategoriser(accountEntries);

    expect(cashFlow.getIncome(incomeCategory)).toEqual(incomeValue);
  });

  test('GIVEN account with single negative value THEN cashflow category is expense', () => {
    const accountEntries = [entryWithSingleExpense];

    const cashFlow = cashFlowCategoriser(accountEntries);

    expect(cashFlow.getExpense(expenseCategory)).toEqual(expenseValue);
  });

  test('GIVEN account with negative and positive value THEN cashflow categories are expense and income', () => {
    const accountEntries = [entryWithSingleExpense, entryWithSingleIncome];

    const cashFlow = cashFlowCategoriser(accountEntries);

    expect(cashFlow.getExpense(expenseCategory)).toEqual(expenseValue);
    expect(cashFlow.getIncome(incomeCategory)).toEqual(incomeValue);
  });

  test('GIVEN account with multiple the same expenses categories THEN cashflow values are added within the same expense', () => {
    const accountEntries = [entryWithSingleExpense, entryWithSingleExpense];

    const cashFlow = cashFlowCategoriser(accountEntries);

    expect(cashFlow.getExpense(expenseCategory)).toEqual(expenseValue * 2);
  });

  test('GIVEN account with multiple the same income categories THEN cashflow values are added within the same income', () => {
    const accountEntries = [entryWithSingleIncome, entryWithSingleIncome];

    const cashFlow = cashFlowCategoriser(accountEntries);

    expect(cashFlow.getIncome(incomeCategory)).toEqual(incomeValue * 2);
  });

  test('GIVEN account with multiple different expenses categories THEN cashflow values got for separate expenses', () => {
    const expenseValue2 = -12.21;
    const expenseCategory2 = 'dummy expense2';
    const entryWithSingleExpense2 = {
      'Data operacji': '2020-08-12',
      'Opis operacji': 'Operation description 2',
      Rachunek: 'My account',
      Kategoria: expenseCategory2,
      Kwota: expenseValue2,
    };
    Object.freeze(entryWithSingleExpense2);

    const accountEntries = [entryWithSingleExpense, entryWithSingleExpense2];

    const cashFlow = cashFlowCategoriser(accountEntries);

    expect(cashFlow.getExpense(expenseCategory)).toEqual(expenseValue);
    expect(cashFlow.getExpense(expenseCategory2)).toEqual(expenseValue2);
  });

  test('GIVEN account with multiple separate income categories THEN cashflow values got for sepatate incomes', () => {
    const incomeValue2 = 2.22;
    const incomeCategory2 = 'dummy income 2';
    const entryWithSingleIncome2 = {
      'Data operacji': '2020-08-09',
      'Opis operacji': 'Operation description',
      Rachunek: 'My account',
      Kategoria: incomeCategory2,
      Kwota: incomeValue2,
    };
    Object.freeze(entryWithSingleIncome2);

    const accountEntries = [entryWithSingleIncome, entryWithSingleIncome2];

    const cashFlow = cashFlowCategoriser(accountEntries);

    expect(cashFlow.getIncome(incomeCategory)).toEqual(incomeValue);
    expect(cashFlow.getIncome(incomeCategory2)).toEqual(incomeValue2);
  });
});
describe('Cash flow categoriser negative scenarios', () => {
  test('GIVEN single account entry with zero value THEN it throws Error', () => {
    const accountEntires = [
      {
        'Data operacji': '2020-08-09',
        'Opis operacji': 'Zero operation description',
        Rachunek: 'My account',
        Kategoria: 'dummy transaction',
        Kwota: 0,
      },
    ];

    expect(() => {
      cashFlowCategoriser(accountEntires);
    }).toThrowError();
  });

  test('GIVEN single account entry with missing value THEN it throws Error', () => {
    const accountEntries = [
      {
        'Data operacji': '2020-08-09',
        'Opis operacji': 'Zero operation description',
        Rachunek: 'My account',
        Kategoria: 'dummy transaction',
      },
    ];

    expect(() => {
      cashFlowCategoriser(accountEntries);
    }).toThrowError();
  });

  test('GIVEN single account entry with invalid value THEN it throws Error', () => {
    const accountEntires = [
      {
        'Data operacji': '2020-08-09',
        'Opis operacji': 'Zero operation description',
        Rachunek: 'My account',
        Kategoria: 'dummy transaction',
        Kwota: '!Invalid - lack of amount!',
      },
    ];
    const cashFlow = cashFlowCategoriser(accountEntires);

    expect(cashFlow.getAllExpenses()).toEqual(0);
    expect(cashFlow.getAllIncomes()).toEqual(0);
  });
});
