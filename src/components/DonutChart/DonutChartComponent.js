import {
  attachStyles,
  renderDonutChart,
  renderLinarChart,
} from '~/utils';
import DonutChartComponentStyles from './DonutChartComponent.scss';
const donuChartClass = 'donuChart';
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
      'smartphonePercentage',
      'tabletPercentage',
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

  get tabletColor() {
    return this.getAttribute('tabletColor');
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
        smartphonePercentage: this.smartphonePercentage,
        smartphoneColor: this.smartphoneColor,
      },
      tablet: {
        tabletPercentage: this.tabletPercentage,
        tabletColor: this.tabletColor,
      },
      element: {
        shadow: this.shadow,
        class: donuChartClass,
      },
    });
    renderLinarChart({
      data: this.data,
      color: this.smartphoneColor,
      element: {
        shadow: this.shadow,
        class: lineChartClass,
      },
    });
  }

  renderTemplate() {
    const template = `
      <div class="DonutChartComponent ${donuChartClass}">
        <div class="DonutChartComponent__line-chart ${lineChartClass}">
          <div class="DonutChartComponent__title">${this.title}</div>
          <div class="DonutChartComponent__total">${this.total}</div>
        </div>
      </div>
    `;

    this.shadow.innerHTML = template;
  }
}

window.customElements.define('donat-chart-component', DonutChartComponent);

export default DonutChartComponent;
