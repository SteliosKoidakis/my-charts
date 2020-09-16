
const axios = require('axios');
class ChartModel {
  constructor(type) {
    this.tablet = 0;
    this.smartphone = 0;
    this.total = 0;
    this.type = type;
    this.total = 0;
    this.data = [];
  }

  get tabletPercentage() {
    return this.tablet / this.total;
  }

  get smartphonePercentage() {
    return this.smartphone / this.total;
  }

  async getChartData() {
    const items = await axios.get(`https://5f621d2789dbd70016e194ca.mockapi.io/chart/${this.type}`);
    this._updateData(items.data);
  }

  _updateData(items) {
    this.tablet = items.tablet;
    this.smartphone = items.smartphone;
    this.total = items.tablet + items.smartphone;
    this.data = items.data;
  }
}

export default ChartModel;
