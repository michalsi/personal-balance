function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US').format(amount);
}

module.exports = formatCurrency;
