const clonedeep = require('lodash').cloneDeep;
const parseCashFlowCurrency = require('../../src/controllers/cashFlowCurrencyParser');

describe('Cash Flow Currency Parser', () => {
  test('Cash flow currency and spaces removed. Decimal sign converted to "dot"', () => {
    const accountItems = [
      {
        'Data operacji': '2020-09-22',
        'Opis operacji': 'Dummy operation MI2',
        Rachunek: 'account number',
        Kategoria: 'dummy category',
        Kwota: '-20 000,99 PLN',
      },
    ];
    const expectedAccountItems = clonedeep(accountItems);
    expectedAccountItems[0].Kwota = -20000.99;

    expect(parseCashFlowCurrency(accountItems)).toEqual(expectedAccountItems);
  });
});
