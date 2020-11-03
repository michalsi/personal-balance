class cashFlow {
  constructor() {
    this.income = new Map();
    this.expense = new Map();

    if (this.constructor === cashFlow) {
      Object.freeze(this);
    }
  }

  setIncome(description, amount) {
    this.income.set(description, amount);
    return this;
  }

  setExpense(description, amount) {
    this.expense.set(description, amount);
    return this;
  }

  getIncome(description) {
    const income = this.income.get(description);
    return income || 0;
  }

  getExpense(description) {
    const expense = this.expense.get(description);
    return expense || 0;
  }

  getAllExpensesValues() {
    const expenses = [...this.expense.values()];
    return expenses.length ? expenses : 0;
  }

  getAllIncomesValues() {
    const incomes = [...this.income.values()];
    return incomes.length ? incomes : 0;
  }
}

module.exports = cashFlow;
