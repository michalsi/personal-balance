const CashFlow = require('../../src/model/cashFlow');
const getAggregatedCashFlow = require('../../src/controllers/expensesAggregator');

describe('Cash Flow Aggregator tests', () => {
  test('WHEN cash flow contains category from group 1 THEN it gets assigned to category 1 bucket', () => {
    const groupRachunkiExpense = 'Prąd';
    const groupRachunkiValue = 10;
    const cashFlow = new CashFlow();

    cashFlow.setExpense(groupRachunkiExpense, groupRachunkiValue);
    const aggregatedCashFlow = getAggregatedCashFlow(cashFlow);

    expect(aggregatedCashFlow.rachunki.get(groupRachunkiExpense)).toEqual(
      groupRachunkiValue
    );
    expect(aggregatedCashFlow.rachunki.size).toBe(1);
    expect(aggregatedCashFlow.codzienneWydatki.size).toBe(0);
    expect(aggregatedCashFlow.oszczednosci.size).toBe(0);
    expect(aggregatedCashFlow.pomocWsparcie.size).toBe(0);
    expect(aggregatedCashFlow.zachcianki.size).toBe(0);
    expect(aggregatedCashFlow.reszta.size).toBe(0);
  });
});
