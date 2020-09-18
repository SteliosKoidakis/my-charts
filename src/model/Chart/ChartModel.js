
import { get } from 'axios';
class ChartModel {
  constructor(type) {
    this.tablet = 0;
    this.smartphone = 0;
    this.total = 0;
    this.type = type;
    this.data = [];
  }

  get tabletPercentage() {
    return (this.tablet / this.total) * 100;
  }

  get smartphonePercentage() {
    return (this.smartphone / this.total) * 100;
  }

  async getChartData() {
    try {
      const items = await get(`https://5f621d2789dbd70016e194ca.mockapi.io/chart/${this.type}`);
      this._updateData(items.data);
    } catch (error) {
      this._updateData([]);
    }
  }

  _updateData(items) {
    if (!items) return;

    this.tablet = items.tablet;
    this.smartphone = items.smartphone;
    this.total = items.tablet + items.smartphone;
    this.data = items.data;
  }
}

export default ChartModel;
