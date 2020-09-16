import {
  renderDonutChart,
  renderLinarChart,
} from '~/utils/chartGenerators';
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

  get total() {
    return parseFloat(this.getAttribute('total'));
  }

  get data() {
    return this.getAttribute('data').split(',');
  }

  async connectedCallback() {
    this.renderTemplate();
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
      <div class="${donuChartClass}">
        <div class="${lineChartClass}"></div>
      </div>
    `;

    this.shadow.innerHTML = template;
  }
}

window.customElements.define('donat-chart-component', DonutChartComponent);

export default DonutChartComponent;
