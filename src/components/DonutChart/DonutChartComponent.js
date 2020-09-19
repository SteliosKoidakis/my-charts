import {
  formatNumber,
  renderStyles,
  renderDonutChart,
  renderLineChart,
} from '~/utils';
import DonutChartComponentStyles from './DonutChartComponent.scss';

const DONUT_CHART_CLASS = 'donutChart';
const LINE_CHART_CLASS = 'lineChart';
const COMPONENT_CLASS = 'DonutChartComponent';

class DonutChartComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode: 'open',
    });
  }

  static get observedAttributes() {
    return [
      'currency',
      'smartphonePercentage',
      'tabletPercentage',
      'smartphone',
      'tablet',
      'smartphoneColor',
      'tabletColor',
      'total',
      'title',
      'data',
    ];
  }

  get tabletPercentage() {
    return parseFloat(this.getAttribute('tabletPercentage')) || 0;
  }

  get smartphonePercentage() {
    return parseFloat(this.getAttribute('smartphonePercentage')) || 0;
  }

  get tablet() {
    return parseFloat(this.getAttribute('tablet')) || 0;
  }

  get smartphone() {
    return parseFloat(this.getAttribute('smartphone')) || 0;
  }

  get tabletColor() {
    return this.getAttribute('tabletColor');
  }

  get currency() {
    return this.getAttribute('currency') || '';
  }

  get smartphoneColor() {
    return this.getAttribute('smartphoneColor') || ' ';
  }

  get title() {
    return this.getAttribute('title') || '';
  }

  get total() {
    return parseFloat(this.getAttribute('total')) || 0;
  }

  get data() {
    return this.getAttribute('data') && this.getAttribute('data').split(',');
  }

  async connectedCallback() {
    this.renderTemplate();
    renderStyles(this.shadow, DonutChartComponentStyles);
    renderDonutChart({
      smartphone: {
        value: this.smartphone,
        smartphoneColor: this.smartphoneColor,
      },
      tablet: {
        value: this.tablet,
        tabletColor: this.tabletColor,
      },
      element: {
        shadow: this.shadow,
        class: DONUT_CHART_CLASS,
      },
    });
    renderLineChart({
      data: this.data,
      color: this.smartphoneColor,
      element: {
        shadow: this.shadow,
        class: LINE_CHART_CLASS,
        backgroundClass: `${COMPONENT_CLASS}__background__${this.title.toLowerCase()}`,
      },
    });
  }

  renderTemplate() {
    const template = `
      <div class="${COMPONENT_CLASS} ${COMPONENT_CLASS}--${this.title.toLowerCase()}">
        <div class="${COMPONENT_CLASS}__donut ${DONUT_CHART_CLASS}">
          <div class="${COMPONENT_CLASS}__line-chart ${LINE_CHART_CLASS}">
            <strong class="${COMPONENT_CLASS}__title">${this.title}</strong>
            <strong class="${COMPONENT_CLASS}__total">${formatNumber(this.total)}</strong>
          </div>
        </div>
        <div class="${COMPONENT_CLASS}__info">
          <div class="${COMPONENT_CLASS}__tablet-info">
            <strong class="${COMPONENT_CLASS}__tablet-text">Tablet</strong>
            <span>${this.tabletPercentage}%</span>
            <span class="${COMPONENT_CLASS}__value">${formatNumber(this.tablet)}${this.currency}</span>
          </div>
          <div class="${COMPONENT_CLASS}__smartphone-info">
            <strong class="${COMPONENT_CLASS}__smartphone-text">Smartphone</strong>
            <span>${this.smartphonePercentage}%</span>
            <span class="${COMPONENT_CLASS}__value">${formatNumber(this.smartphone)}${this.currency}</span>
          </div>
        </div>
      </div>
    `;

    this.shadow.innerHTML = template;
  }
}

window.customElements.define('donut-chart-component', DonutChartComponent);

export default DonutChartComponent;
