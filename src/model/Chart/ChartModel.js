
class ChartModel {
  constructor(type) {
    this.tablet = 0;
    this.smartphone = 0;
    this.total = 0;
    this.type = type;
    this.total = 0;
  }
  get tabletPercentage() {
    return this.tablet / this.total;
  }
  get smartphonePercentage() {
    return this.smartphone / this.total;
  }
  async getChartData () {
    // todo: check for alias use
    const items = await import(`../../../static/${this.type}.js`);
    this._updateData(items.default);
  }
  _updateData(items ) {
    this.tablet = items.tablet;
    this.smartphone = items.smartphone;
    this.total = items.tablet + items.smartphone;
  }
}

export default ChartModel;
