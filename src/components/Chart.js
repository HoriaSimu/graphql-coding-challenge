// most of this code is taken directly from a basic vx example

import React from 'react';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { AxisBottom, AxisLeft } from '@vx/axis';
import { scaleLinear, scaleBand } from '@visx/scale';


// Finally we'll embed it all in an SVG
function Chart(props) {
  const data = props.chartData;

  // Define the graph dimensions and margins
  const width = 750;
  const height = 500;
  const margin = { top: 20, bottom: 20, left: 20, right: 20 };

  // Then we'll create some bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // We'll make some helpers to get at the data we want
  const x = d => d.month;
  const y = d => d.postCount;

  // And then scale the graph by our data
  const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: data.map(x),
    padding: 0.4,
  });
  const yScale = scaleLinear({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(y))],
  });

  // Compose together the scale and accessor functions to get point functions
  const compose = (scale, accessor) => data => scale(accessor(data));
  const xPoint = compose(xScale, x);
  const yPoint = compose(yScale, y);

  return (
    <svg width={width} height={height}>
      {data.map((d, i) => {
        const barHeight = yMax - yPoint(d);
        return (
          <Group key={`bar-${i}`}>
            <Bar
              x={xPoint(d)}
              y={yMax - barHeight}
              height={barHeight}
              width={xScale.bandwidth()}
              fill="#3B444B"
            />
            <AxisLeft
              hideTicks={true}
              scale={yScale}
              tickLabelProps={(value, index) => ({
                fontSize: 11,
                textAnchor: 'end',
              })}
            />
            <AxisBottom
              top={yMax}
              hideTicks={true}
              scale={xScale}
              tickLabelProps={(value, index) => ({
                fontSize: 11,
                textAnchor: 'middle',
              })}
            />
          </Group>
        );
      })}
    </svg>
  );
}

export default Chart;
