const formatCurrency = require('./currencyFormater');

exports.printHeader = (header, ammount) => {
  console.log('--------------------------------');
  console.log(`${header} \t ${formatCurrency(ammount)}`);
  console.log('--------------------------------');
};

exports.printFooter = () => {
  console.log('--------------------------------');
};
