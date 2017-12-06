import React, {Component} from 'react';
import {VictoryChart, VictoryLine} from 'victory';
class AvgTime extends Component{
    render(){
        return(
            <div className="panel panel-default">
            <div className="panel-heading">Avg. Time Spent on Site <small>(in seconds)</small></div>
            <div className="panel-body">
                <VictoryChart domainPadding={20} >
                <VictoryLine  style={{ data: { stroke: "#f58120" } }} />
                </VictoryChart>
            </div>
         </div>
        )
    }
}

export default AvgTime;