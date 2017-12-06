import React, {Component} from 'react';
import {VictoryBar, VictoryChart, VictoryTooltip} from 'victory';
class MonthlyVisits extends Component{
    render(){
        return(
            <div className="panel panel-default">
            <div className="panel-heading">Visits</div>
            <div className="panel-body">
            <svg viewBox="0 0 400 215" >
                <VictoryChart domainPadding={20} height={180} >
                
                <VictoryBar labelComponent={<VictoryTooltip/>}
                data={[
                        { x: 1, y: 2, label: "2"},
                        { x: 2, y: 3, label: "3" },
                        { x: 3, y: 5, label: "5" },
                        { x: 4, y: 4, label: "4" },
                        { x: 5, y: 6, label: "6" }
                        ]}
                 style={{ data: { fill: "#33cc33" } }}/>
                </VictoryChart>
                </svg>
            </div>
        </div>
        )
    }
}

export default MonthlyVisits;