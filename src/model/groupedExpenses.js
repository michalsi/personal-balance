class groupedExpenses {
  constructor() {
    this.rachunki = new Map();
    this.codzienneWydatki = new Map();
    this.oszczednosci = new Map();
    this.pomocWsparcie = new Map();
    this.zachcianki = new Map();
    this.reszta = new Map();
  }

  addToRachunki(description, value) {
    this.rachunki.set(description, value);
    return this;
  }

  addToCodzienneWydatki(description, value) {
    this.codzienneWydatki.set(description, value);
    return this;
  }

  addToOszczednosci(description, value) {
    this.oszczednosci.set(description, value);
    return this;
  }

  addToPomocWsparcie(description, value) {
    this.pomocWsparcie.set(description, value);
    return this;
  }

  addToZachcianki(description, value) {
    this.zachcianki.set(description, value);
    return this;
  }

  addToReszta(description, value) {
    this.reszta.set(description, value);
    return this;
  }
}

module.exports = groupedExpenses;
