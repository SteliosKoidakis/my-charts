import { select } from 'd3-selection';
import { scaleOrdinal, scaleLinear, scale } from 'd3-scale';
import {
  arc, pie, line, area,
} from 'd3-shape';
import { max } from 'd3-array';

const renderDonutChart = ({
  smartphone,
  tablet,
  element,
}) => {
  const data = [{
    name: 'smartphone',
    value: smartphone.value,
  },
  {
    name: 'tablet',
    value: tablet.value,
  },
  ];
  const width = 180;
  const height = 180;
  const thickness = 8;
  const radius = Math.min(width, height) / 2;
  const color = scaleOrdinal([smartphone.smartphoneColor, tablet.tabletColor]);

  const svg = select(element.shadow)
    .select(`.${element.class}`)
    .append('svg')
    .attr('class', 'pie')
    .attr('width', width)
    .attr('height', height);

  const g = svg
    .append('g')
    .attr('transform', `translate(${width / 2},${height / 2})`);

  const arcItem = arc()
    .innerRadius(radius - thickness)
    .outerRadius(radius);

  const pieItem = pie()
    .value((d) => d.value)
    .sort(null);

  const path = g // eslint-disable-line no-unused-vars
    .selectAll('path')
    .data(pieItem(data))
    .enter()
    .append('g')
    .append('path')
    .attr('d', arcItem)
    .attr('fill', (d, i) => color(i));
};

const renderLinarChart = ({
  data,
  color,
  element,
}) => {
  const svg = select(element.shadow)
    .select(`.${element.class}`)
    .append('svg')
    .attr('width', 100)
    .attr('height', 50)
    .append('g');

  const x = scaleLinear()
    .domain([0, max(data, (value, index) => index)])
    .range([0, 100]);

  const y = scaleLinear()
    .domain([0, max(data, (value) => value)])
    .range([50, 0]);

  const chartArea = area()
    .x((value, index) => x(index))
    .y0(y(0))
    .y1((value) => y(value));

  svg.append('path')
    .datum(data)
    .attr('fill', color)
    .attr('stroke', color)
    .attr('stroke-width', 0.8)
    .attr('d', line()
      .x((value, index) => x(index))
      .y((value) => y(value)));

  svg
    .append('path')
    .datum(data)
    .attr('class', element.backgroundClass)
    .attr('d', chartArea);
};

export {
  renderDonutChart,
  renderLinarChart
};
