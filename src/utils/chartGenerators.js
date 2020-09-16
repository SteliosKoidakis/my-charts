import { select } from 'd3-selection';
import { scaleOrdinal, scaleTime, scaleLinear } from 'd3-scale';
import { arc, pie, line } from 'd3-shape';
import { max, extent } from 'd3-array';

const renderDonutChart = ({
  smartphone,
  tablet,
  element,
}) => {
  const data = [{
    name: 'smartphone',
    value: smartphone.smartphonePercentage,
  },
  {
    name: 'tablet',
    value: tablet.tabletPercentage,
  },
  ];
  const width = 150;
  const height = 150;
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
  const margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  const svg = select(element.shadow)
    .select(`.${element.class}`)
    .append('svg')
    .attr('width', 100 + margin.left + margin.right)
    .attr('height', 100 + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const x = scaleTime()
    .domain(extent(data, (value) => value))
    .range([0, 100]);
  svg.append('g');

  const y = scaleLinear()
    .domain([0, max(data, (value) => +value)])
    .range([100, 0]);
  svg.append('g');

  svg
    .append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', color)
    .attr('stroke-width', 1.5)
    .attr(
      'd',
      line()
        .x((value, index) => x(index))
        .y((value) => y(value)),
    );
};

export {
  renderDonutChart,
  renderLinarChart
};
