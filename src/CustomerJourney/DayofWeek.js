import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

class DayofWeek extends Component {
    render() {
        return (
            <div>
                <VictoryChart domainPadding={15} >
                    <VictoryAxis 
                    // tickValues={['Mon', 'Tue', 'Wed', 'Thru', 'Fri', 'Sat', 'Sun']}
                    style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'white', fontSize: 15 } }} />
                    {/* <VictoryAxis 
                    
                    dependentAxis style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'white', fontSize: 15 } }} /> */}
                    <VictoryBar 
                    data={[
                        { x: 'Mon', y: 2  },
                        { x: 'Tue', y: 3 },
                        { x: 'Wed', y: 5  },
                        { x: 'Thru', y: 4 },
                        { x: 'Fri', y: 3 },
                        { x: 'Sat', y: 7 },
                        { x: 'Sun', y: 8 }
                      ]}
                    style={{ data: { fill: "#c43a31" } }} />
                </VictoryChart>
            </div>
        )
    }
}
export default DayofWeek;