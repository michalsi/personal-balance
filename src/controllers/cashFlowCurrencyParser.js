const clonedeep = require('lodash').cloneDeep;

function parseCashFlowCurrency(accountItems) {
  const valueProp = 'Kwota';
  const accountItemsParsed = clonedeep(accountItems);

  Object.keys(accountItems).forEach((key) => {
    accountItemsParsed[key][valueProp] = parseFloat(
      accountItems[key][valueProp].replace(',', '.').replace(/\s/g, '')
    );
  });

  return accountItemsParsed;
}

module.exports = parseCashFlowCurrency;
