import React, {useState} from 'react';
import GridLayout from 'react-grid-layout';
import './common.css'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './WidgetGrid.css'

const WidgetGrid = ({ name, big }) => {
  // layout is an array of objects, see the demo for more complete usage
  let [layout, updateLayout] = useState([
    {i: "1", x: 0, y: 0, w: 1, h: 2},
    {i: "2", x: 1, y: 0, w: 2, h: 2, minW: 2, maxW: 4},
    {i: "3", x: 0, y: 3, w: 3, h: 2}
  ]);

  function addLayout() {
    let newLayout = [...layout]
    newLayout.push({i: (layout.length+1).toString(), x:0, y:0, w:1, h:1});
    updateLayout(newLayout);
  }

  return (
    <>
      <button onClick={addLayout}>위젯 추가</button>
      <GridLayout className="layout" layout={layout} rowHeight={170} width={3500}
                  containerPadding={[10, 10]}>
        {
          layout.map((item, index) => {
            return (
              <div key={(index+1).toString()}>
                <div className="noData">No data to display</div>
              </div>
            )
          })
        }
      </GridLayout>
    </>
  )
};

export default WidgetGrid;