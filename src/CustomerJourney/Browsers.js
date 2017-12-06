import React, { Component } from 'react';
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';
class Browsers extends Component {
    render() {
        return (
           
                    <div >
                        <VictoryChart domainPadding={{ y: 10 }}>
                            <VictoryBar horizontal style={{
                                data: { fill: "coral" }
                            }} />
                            <VictoryAxis
                                tickValues={['Chrome', 'IE', 'Firefox', 'Others']}
                                style={{axis:{stroke: 'white'},tickLabels:{fill: 'white',angle: -60}}}
                                dependentAxis
                                
                            />
                                        
                        </VictoryChart>
                    </div>
              
        )
    }
}
export default Browsers;