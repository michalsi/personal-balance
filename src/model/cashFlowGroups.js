class cashFlowGroups {
  constructor() {
    this.rachunki = [
      'TV, internet, telefon',
      'Prąd',
      'Czynsz i wynajem',
      'Paliwo',
      'Przedszkole i opiekunka',
    ];
    this.codzienneWydatki = [
      'Żywność i chemia domowa',
      'Zdrowie i uroda',
      'Serwis i części',
      'Przejazdy',
      'Odzież i obuwie',
    ];
    this.oszczednosci = ['IKZE', 'Emerytura', 'Obligacje 500+', 'Nieruchomość'];
    this.pomocWsparcie = ['Prezenty i wsparcie'];
    this.zachcianki = [
      'Multimedia, książki i prasa',
      'Wyjścia i wydarzenia',
      'Akcesoria i wyposażenie',
      'Jedzenie poza domem',
      'Sport i hobby',
      'Art. dziecięce i zabawki',
      'Wyjścia i wydarzenia',
      'Akcesoria i wyposażenie',
      'Edukacja',
    ];
    this.reszta = ['Wypłata gotówki'];
    this.przelewWlasny = ['Przelew własny'];

    if (this.constructor === cashFlowGroups) {
      Object.freeze(this);
    }
  }

  getRachunkiCategories() {
    return this.rachunki;
  }

  getCodzienneWydatkiCategories() {
    return this.codzienneWydatki;
  }

  getOszczednosciCategories() {
    return this.oszczednosci;
  }

  getPomocWsparcieCategories() {
    return this.pomocWsparcie;
  }

  getZachciankiCategories() {
    return this.zachcianki;
  }

  getResztaCategories() {
    return this.reszta;
  }

  getPrzelewWlasnyCategories() {
    return this.przelewWlasny;
  }
}

module.exports = cashFlowGroups;
