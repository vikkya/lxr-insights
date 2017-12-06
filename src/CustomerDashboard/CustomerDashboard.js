import React, { Component } from 'react';
import GeoMap from '../GeoMap';
import { VictoryChart, VictoryBar, VictoryPie, VictoryLine, VictoryAxis } from 'victory'
class CustomerDashboard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-center font-white">New Customers </h1>
                        <div className="row">
                            <div className="col-md-12">
                                <GeoMap />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel panel-default panel-height">
                                    <div className="panel-heading">Browser Distribution</div>
                                    <div className="panel-body">
                                        <VictoryChart domainPadding={{ y: 8 }} >

                                            <VictoryBar horizontal
                                                style={{
                                                    data: { fill: '#c43a31' }
                                                }}
                                                padding={{ top: 20, bottom: 60 }}
                                            />
                                            {/* <VictoryAxis style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'white', fontSize: 15 } }} /> */}
                                            <VictoryAxis tickValues={['Chrome', 'IE', 'Firefox', 'Others']} dependentAxis style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'white', fontSize: 15, angle: -60 } }} />
                                        </VictoryChart>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Device Distribution</div>
                                    <div className="panel-body">
                                        <VictoryPie
                                            colorScale={["#FF6384", "#36A2EB", "#FFCE56"]}
                                            style={{ labels: { fill: 'white' } }}
                                            data={[
                                                { x: 1, y: 2, label: "Desktop" },
                                                { x: 2, y: 3, label: "Tablet" },
                                                { x: 3, y: 5, label: "Mobile" }
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Day of Week</div>
                                    <div className="panel-body">
                                        <VictoryChart domainPadding={{ x: 12 }}>
                                            <VictoryBar 
                                            style={{
                                                data: { fill: 'coral' }
                                            }}
                                            data={[
                                                { x: 'Mon', y: 2 },
                                                { x: 'Tue', y: 3 },
                                                { x: 'Wed', y: 5 },
                                                { x: 'Thru', y: 4 },
                                                { x: 'Fri', y: 3 },
                                                { x: 'Sat', y: 7 },
                                                { x: 'Sun', y: 8 }
                                            ]} />
                                            <VictoryAxis
                                                tickValues={['Mon', 'Tue', 'Wed', 'Thru', 'Fri', 'Sat', 'Sun']}
                                                style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'white', fontSize: 15 } }} />
                                            <VictoryAxis dependentAxis style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'white', fontSize: 15 } }} />

                                        </VictoryChart>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Hour of Day</div>
                                    <div className="panel-body">
                                        <VictoryChart>
                                            <VictoryLine style={{data: {stroke: '#36a2eb'}}}/>
                                            <VictoryAxis 
                                            tickValues={['6', '12', '18', '23']}
                                            style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'white', fontSize: 15 } }} />
                                            <VictoryAxis dependentAxis style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'white', fontSize: 15 } }} />

                                        </VictoryChart>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Top Products</div>
                                    <div className="panel-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>S.No.</th>
                                                    <th>Product Name</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Product One</td>

                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Product 2</td>

                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Product 3</td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1 className="text-center font-white">Returning Customers</h1>
                        <div className="row">
                            <div className="col-md-12">
                                <GeoMap />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel panel-default panel-height">
                                    <div className="panel-heading">Browser Distribution</div>
                                    <div className="panel-body">
                                        <VictoryChart domainPadding={{ y: 8 }} >

                                            <VictoryBar horizontal
                                                style={{
                                                    data: { fill: '#c43a31' }
                                                }}
                                                padding={{ top: 20, bottom: 60 }}
                                            />
                                            {/* <VictoryAxis style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'white', fontSize: 15 } }} /> */}
                                            <VictoryAxis tickValues={['Chrome', 'IE', 'Firefox', 'Others']} dependentAxis style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'white', fontSize: 15, angle: -60 } }} />
                                        </VictoryChart>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Device Distribution</div>
                                    <div className="panel-body">
                                        <VictoryPie
                                            style={{ labels: { fill: 'white' } }}
                                            colorScale={["tomato", "orange", "gold"]}
                                            data={[
                                                { x: "Desktop", y: 35 },
                                                { x: "Tablet", y: 40 },
                                                { x: "Mobile", y: 55 }
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Day of Week</div>
                                    <div className="panel-body">
                                        <VictoryChart domainPadding={{ x: 12 }}>
                                            <VictoryBar
                                            style={{
                                                data: { fill: 'coral' }
                                            }}
                                            data={[
                                                { x: 'Mon', y: 2 },
                                                { x: 'Tue', y: 3 },
                                                { x: 'Wed', y: 5 },
                                                { x: 'Thru', y: 4 },
                                                { x: 'Fri', y: 3 },
                                                { x: 'Sat', y: 7 },
                                                { x: 'Sun', y: 8 }
                                            ]} />
                                            <VictoryAxis style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'white', fontSize: 15 } }} />
                                            <VictoryAxis dependentAxis style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'white', fontSize: 15 } }} />

                                        </VictoryChart>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Hour of Day</div>
                                    <div className="panel-body">
                                    <VictoryChart>
                                        <VictoryLine style={{data: {stroke: '#36a2eb'}}}/>
                                        <VictoryAxis tickValues={['6', '12', '18', '23']}
                                        style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'white', fontSize: 15 } }} />
                                        <VictoryAxis dependentAxis style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'white', fontSize: 15 } }} />

                                    </VictoryChart></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Top Product</div>
                                    <div className="panel-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>S.No.</th>
                                                    <th>Product Name</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Product One</td>

                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Product 2</td>

                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Product 3</td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerDashboard;