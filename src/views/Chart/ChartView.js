import { ChartModel } from '~/models';
import { renderStyles } from '~/utils';
import ChartViewStyles from './ChartView.scss';

const COMPONENT_CLASS = 'ChartView';

class ChartView extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode: 'open',
    });

    this.revenewChart = new ChartModel('revenewChart');
    this.impressionsChart = new ChartModel('impressionsChart');
    this.visitsChart = new ChartModel('visitsChart');
  }

  async connectedCallback() {
    await this.getChartsInformation();
    this.renderTemplate();
    renderStyles(this.shadow, ChartViewStyles);
  }

  async getChartsInformation() {
    await this.revenewChart.getChartData();
    await this.impressionsChart.getChartData();
    await this.visitsChart.getChartData();
  }

  renderTemplate() {
    const template = `
    <div class="${COMPONENT_CLASS}">
      <div class="${COMPONENT_CLASS}__slides">
        <div class="${COMPONENT_CLASS}__item">
          <donut-chart-component
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
        <div class="${COMPONENT_CLASS}__item">
          <donut-chart-component
            data=${this.impressionsChart.data}
            smartphonePercentage=${this.impressionsChart.smartphonePercentage}
            tabletPercentage=${this.impressionsChart.tabletPercentage}
            smartphone=${this.impressionsChart.smartphone}
            tablet=${this.impressionsChart.tablet}
            smartphoneColor="#2945BB"
            title="impressions"
            tabletColor="#4DD4DD"
            total=${this.impressionsChart.total}
          />
        </div>
        <div class="${COMPONENT_CLASS}__item">
          <donut-chart-component
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
    </div>
      `;

    this.shadow.innerHTML = template;
  }
}

window.customElements.define('chart-view', ChartView);

export default ChartView;
