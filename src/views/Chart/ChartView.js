import ChartModel from '~/model/Chart/ChartModel';
import { attachStyles } from '~/utils';
import ChartViewStyles from './ChartView.scss';

class ChartView extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode: 'open',
    });

    this.revenewChart = new ChartModel('revenewChart');
    this.impresionsChart = new ChartModel('impresionsChart');
    this.visitsChart = new ChartModel('visitsChart');
  }

  async connectedCallback() {
    await this.getChartsInformation();
    this.renderTemplate();
    attachStyles(this.shadow, ChartViewStyles);
  }

  async getChartsInformation() {
    await this.revenewChart.getChartData();
    await this.impresionsChart.getChartData();
    await this.visitsChart.getChartData();
  }

  renderTemplate() {
    const template = `
      <div div class="ChartView">
        <div class="ChartView__item">
          <donat-chart-component
            data=${this.revenewChart.data}
            smartphonePercentage=${this.revenewChart.smartphonePercentage}
            tabletPercentage=${this.revenewChart.tabletPercentage}
            smartphone=${this.revenewChart.smartphone}
            tablet=${this.revenewChart.tablet}
            currency="€"
            smartphoneColor="#38AF1E"
            title="REVENUE"
            tabletColor="#44DF22"
            total=${this.revenewChart.total}
          />
        </div>
        <div class="ChartView__item">
          <donat-chart-component
            data=${this.impresionsChart.data}
            smartphonePercentage=${this.impresionsChart.smartphonePercentage}
            tabletPercentage=${this.impresionsChart.tabletPercentage}
            smartphone=${this.impresionsChart.smartphone}
            tablet=${this.impresionsChart.tablet}
            smartphoneColor="#2945BB"
            title="IMPRESIONS"
            tabletColor="#4DD4DD"
            total=${this.impresionsChart.total}
          />
        </div>
        <div class="ChartView__item">
          <donat-chart-component
            data=${this.visitsChart.data}
            smartphonePercentage=${this.visitsChart.smartphonePercentage}
            tabletPercentage=${this.visitsChart.tabletPercentage}
            smartphone=${this.visitsChart.smartphone}
            tablet=${this.visitsChart.tablet}
            smartphoneColor="#E55039"
            title="VISITS"
            tabletColor="#E5C839"
            total=${this.visitsChart.total}
          />
        </div>
      </div>
      `;

    this.shadow.innerHTML = template;
  }
}

window.customElements.define('chart-view', ChartView);

export default ChartView;
