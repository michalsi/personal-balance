function summariseGroupedExpenses(groupedExpenses) {
  const summaryOfGroupedExpenses = {};
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  Object.entries(groupedExpenses).forEach(([category, value]) => {
    summaryOfGroupedExpenses[category] = Array.from(value.values()).reduce(
      reducer
    );
  });

  return summaryOfGroupedExpenses;
}

module.exports = summariseGroupedExpenses;
