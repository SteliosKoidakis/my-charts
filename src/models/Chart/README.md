# ChartModel
Data model for a chart.

## Usage
```javascript

import { ChartModel } from '~/models';

this.revenewChart = new ChartModel('revenewChart');
```

### Properties

| Prop           | Description              | Type  
|---------------|--------------------------| ------------
| tablet         | Tablet data of the specific chart  |  Number
| smartphone         | Smartphone data of the specific chart  | Number
| total         | Total amount of data , tablet + smartphone  | Number
| type         | Type of data  | String
| data         | List of data  | Array
| tabletPercentage         | percentage of tablet data  | Number
| smartphonePercentage         | percentage of smartphone data  | Number


### Methods

#### getChartData

Does an http call to retrieve data for a specific type

```javascript

this.revenewChart = new ChartModel('revenewChart');
this.revenewChart.getChartData();

```

#### _updateData

A private methods to update the class properties according the data will pass as a parameter
