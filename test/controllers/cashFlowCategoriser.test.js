const cashFlowCategoriser = require('../../src/controllers/cashFlowCategoriser');
const CashFlow = require('../../src/model/cashFlow');

test('GIVEN single account entry with positive value THEN it is categorised as income', () => {
  const accountWithSingleItem = [{
    'Data operacji': '2020-08-09',
    'Opis operacji': 'Operation description',
    Rachunek: 'My account',
    Kategoria: 'dummy income',
    Kwota: '10,98 PLN',
  }];

  const expectedCashFlow = new CashFlow();
  expectedCashFlow.income.set('dummy income', 10.98);

  const cashFlow = cashFlowCategoriser(accountWithSingleItem);

  expect(cashFlow).toMatchObject(expectedCashFlow);
});

test('GIVEN single account entry with negative value THEN it is categorised as expense', () => {
  const accountWithSingleItem = [{
    'Data operacji': '2020-08-09',
    'Opis operacji': 'Operation description',
    Rachunek: 'My account',
    Kategoria: 'dummy expense',
    Kwota: '-10,99 PLN',
  }];

  const expectedCashFlow = new CashFlow();
  expectedCashFlow.expense.set('dummy expense', -10.99);

  const cashFlow = cashFlowCategoriser(accountWithSingleItem);

  expect(cashFlow).toMatchObject(expectedCashFlow);
});

test('GIVEN single account entry with zero value THEN it throws Error', () => {
  const accountWithSingleItem = [{
    'Data operacji': '2020-08-09',
    'Opis operacji': 'Zero operation description',
    Rachunek: 'My account',
    Kategoria: 'dummy transaction',
    Kwota: '0 PLN',
  }];

  expect(() => {
    cashFlowCategoriser(accountWithSingleItem);
  }).toThrowError();
});
