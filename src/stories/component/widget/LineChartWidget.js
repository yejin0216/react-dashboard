import React, {useState, useEffect} from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import '../layout/WidgetGrid.css'

const LineChartWidget = ({ name, big }) => {
  // layout is an array of objects, see the demo for more complete usage
  const layout = [{i: "1", x: 0, y: 0, w: 2, h: 2}];


  return (
    <GridLayout className="layout" layout={layout} cols={12} rowHeight={170} width={3500}
                containerPadding={[10, 10]}>
      {
        layout.map((item, index) => {
          return (
            <div key="1">
              <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="line" height={350} />
            </div>
          )
        })
      }
    </GridLayout>
  )
};

export default LineChartWidget;