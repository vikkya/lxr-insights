import React, { Component } from 'react';
import { VictoryChart, VictoryBar, VictoryGroup, VictoryAxis, VictoryLine } from 'victory';

class TotalCustomers extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <VictoryChart domainPadding={20} >
                            <VictoryAxis style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'white', fontSize: 15 } }} />
                            <VictoryAxis dependentAxis style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'white', fontSize: 15 } }} />
                            <VictoryLine
                                style={{
                                    data: { stroke: "#c43a31" },
                                    parent: { border: "1px solid #ccc" }
                                }}
                                data={[
                                    { x: 1, y: 2 },
                                    { x: 2, y: 3 },
                                    { x: 3, y: 5 },
                                    { x: 4, y: 4 },
                                    { x: 5, y: 7 }
                                ]}
                            />
                            <VictoryGroup offset={20}
                                colorScale={"qualitative"}>
                                <VictoryBar width={25}animate={{
                                    duration: 2000,
                                    onLoad: { duration: 1000 }
                                }}
                                    data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]}
                                />
                                <VictoryBar animate={{
                                    duration: 2000,
                                    onLoad: { duration: 1000 }
                                }}
                                    data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}
                                />
                            </VictoryGroup>
                        </VictoryChart>
                    </div>
                </div>
            </div>
        )
    }
}
export default TotalCustomers;