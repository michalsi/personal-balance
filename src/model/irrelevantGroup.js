class irrelevantGroup {
  constructor() {
    this.niewazneCategories = ['Przelew własny'];

    if (this.constructor === irrelevantGroup) {
      Object.freeze(this);
    }
  }

  getNiewazneCategories() {
    return this.niewazneCategories;
  }
}

module.exports = irrelevantGroup;
