const cashFlowPrinter = require('../../src/view/cashFlowPrinter');
const CashFlow = require('../../src/model/cashFlow');

describe('Cash flow printer tests', () => {
  test('Cash Flow printer called and prints income and expense values', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const cashFlow = new CashFlow();
    cashFlow.setIncome('dummy income', 10.22);
    cashFlow.setExpense('dummy expense', -9.22);

    cashFlowPrinter(cashFlow);
    expect(consoleSpy).toBeCalledTimes(8);
    expect(consoleSpy).toHaveBeenCalledWith('WPŁYWY');
    expect(consoleSpy).toHaveBeenCalledWith('dummy income\t10.22');
    expect(consoleSpy).toHaveBeenCalledWith('WYDATKI');
    expect(consoleSpy).toHaveBeenCalledWith('dummy expense\t-9.22');
  });
});
