import {
  attachStyles,
  renderDonutChart,
  renderLinarChart,
} from '~/utils';
import DonutChartComponentStyles from './DonutChartComponent.scss';
const donutChartClass = 'donutChart';
const lineChartClass = 'lineChart';

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
    return parseFloat(this.getAttribute('tabletPercentage'));
  }

  get smartphonePercentage() {
    return parseFloat(this.getAttribute('smartphonePercentage'));
  }

  get tablet() {
    return parseFloat(this.getAttribute('tablet'));
  }

  get smartphone() {
    return parseFloat(this.getAttribute('smartphone'));
  }

  get tabletColor() {
    return this.getAttribute('tabletColor');
  }

  get currency() {
    return this.getAttribute('currency') || '';
  }

  get smartphoneColor() {
    return this.getAttribute('smartphoneColor');
  }

  get title() {
    return this.getAttribute('title');
  }

  get total() {
    return parseFloat(this.getAttribute('total'));
  }

  get data() {
    return this.getAttribute('data').split(',');
  }

  async connectedCallback() {
    this.renderTemplate();
    attachStyles(this.shadow, DonutChartComponentStyles);
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
        class: donutChartClass,
      },
    });
    renderLinarChart({
      data: this.data,
      color: this.smartphoneColor,
      element: {
        shadow: this.shadow,
        class: lineChartClass,
        backgroundClass: `DonutChartComponent__background-${this.title.toLowerCase()}`,
      },
    });
  }

  renderTemplate() {
    const template = `
      <div class="DonutChartComponent">
        <div div class="DonutChartComponent__donut ${donutChartClass}">
          <div class="DonutChartComponent__line-chart ${lineChartClass}">
            <strong class="DonutChartComponent__title">${this.title}</strong>
            <strong class="DonutChartComponent__total">${this.total}</strong>
          </div>
        </div>
        <div class="DonutChartComponent__info">
          <div class="DonutChartComponent__tablet-info" >
            <strong style="color:${this.tabletColor}">Tablet</strong>
            <div>
              <span>${this.tabletPercentage}% </span>
              <span class="DonutChartComponent__value">${this.tablet}${this.currency}</span>
             </div>
          </div>
          <div>
             <strong style="color:${this.smartphoneColor}">Smartphone</strong>
             <div>
              <span>${this.smartphonePercentage}% </span>
              <span class="DonutChartComponent__value">${this.smartphone}${this.currency}</span>
             </div>
          </div>
        </div>
      </div>
    `;

    this.shadow.innerHTML = template;
  }
}

window.customElements.define('donat-chart-component', DonutChartComponent);

export default DonutChartComponent;
