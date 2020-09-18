# DonutChartComponent
Ui component responsible to render a donut and a liner chart.

## Usage
```javascript

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
```


### Props

| Prop           | Description              |
|---------------|--------------------------|
| data         | Data for the line chart  |
| smartphonePercentage  | The percentage of the smartphone users  |
| tabletPercentage  | The percentage of the tablet users  |
| smartphonePercentage  | The percentage of the smartphone users 
| tabletColor  | The color of the tablet part of the donut diagram  |
| smartphoneColor  | The color of the tablet part of the donut diagram  |
| smartphone  | The total of the smartphone users |
| tablet  | The total of the tablet users  |
| total  | The total  users |
| title  | The title of the  chart |
| currency  | Currency   |
