import * as d3 from 'd3';

const donuChartClass = 'donuChart';

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

  async connectedCallback() {
    this.renderTemplate();
    this.renderChart();
  }

  renderChart() {
    const data = [{
      name: 'smartphone',
      value: this.smartphonePercentage,
    },
    {
      name: 'tablet',
      value: this.tabletPercentage,
    },
    ];
    const text = this.total;
    const width = 150;
    const height = 150;
    const thickness = 8;
    const radius = Math.min(width, height) / 2;
    const color = d3.scaleOrdinal([this.smartphoneColor, this.tabletColor]);

    const svg = d3
      .select(this.shadow)
      .select(`.${donuChartClass}`)
      .append('svg')
      .attr('class', 'pie')
      .attr('width', width)
      .attr('height', height);

    const g = svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const arc = d3
      .arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius);

    const pie = d3
      .pie()
      .value((d) => d.value)
      .sort(null);

    const path = g // eslint-disable-line no-unused-vars
      .selectAll('path')
      .data(pie(data))
      .enter()
      .append('g')
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i));

    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .text(text);
  }

  renderTemplate() {
    const template = `
      <div class="${donuChartClass}"></div>
    `;

    this.shadow.innerHTML = template;
  }
}

window.customElements.define('donat-chart-component', DonutChartComponent);

export default DonutChartComponent;
