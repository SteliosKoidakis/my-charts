import ChartModel from '~/model/Chart/ChartModel';
import ChartViewStyle from './ChartView.scss';

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

  attachStyles() {
    const style = document.createElement('style');
    style.textContent = ChartViewStyle;
    this.shadow.appendChild(style);
  }

  async connectedCallback() {
    await this.getChartsInformation();
    this.renderTemplate();
    this.attachStyles();
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
          ${this.revenewChart.total}
          ${this.revenewChart.tabletPercentage}
          ${this.revenewChart.smartphonePercentage}
          <donat-chart-component
            smartphonePercentage=${this.revenewChart.smartphonePercentage}
            tabletPercentage=${this.revenewChart.tabletPercentage}
            smartphoneColor="#38AF1E"
            tabletColor="#44DF22"
            total=${this.revenewChart.total}
          />
        </div>
        <div class="ChartView__item">
          ${this.impresionsChart.total}
          ${this.impresionsChart.tabletPercentage}
          ${this.impresionsChart.smartphonePercentage}
          <donat-chart-component
            smartphonePercentage=${this.impresionsChart.smartphonePercentage}
            tabletPercentage=${this.impresionsChart.tabletPercentage}
            smartphoneColor="#2945BB"
            tabletColor="#4DD4DD"
            total=${this.impresionsChart.total}
          />
        </div>
        <div class="ChartView__item">
          ${this.visitsChart.total}
          ${this.visitsChart.tabletPercentage}
          ${this.visitsChart.smartphonePercentage}
          <donat-chart-component
            smartphonePercentage=${this.visitsChart.smartphonePercentage}
            tabletPercentage=${this.visitsChart.tabletPercentage}
            smartphoneColor="#E55039"
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
