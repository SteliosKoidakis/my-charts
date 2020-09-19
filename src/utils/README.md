# Utilities
Global utilities functions

## Usage
```javascript

import { formatNumber } from '~/utils';
```



###  formatNumber()

Format number with dots.


```javascript
// parameter number , type number
formatNumber(123345) 

// returns string
--> '123.345'

```

###  renderStyles()
Render styles to shadow dom

```javascript
// parameter shadow element
// parameter styles to be rendered
renderStyles(shadow, styles) 


```
###  renderDonutChart()
Render donut chart to an html element of shadow dom

```javascript
renderDonutChart({
   smartphone: {
     value: '',   // Value of smartphone data.
     color: ''     // Chart color of smartphone data.
   },
    tablet: {
      value: '', // Value of tablet data.
      color: '' // Chart color of tablet data.
    },
    element:{
      shadow: '', // Shadow dom.
      class: '', // Class to render the chart.
    },
}) 


```
###  renderLineChart()
Render line chart to an html element of shadow dom

```javascript
renderLineChart({
    color: '', // Color of line.
    data: [], // Information to generate the line of the chart.
    element:{
      backgroundClass:'' // Class for attach styles on line chart area.
      shadow: '', // Shadow dom.
      class: '', // Class to render the chart.
    },
}) 

```
 