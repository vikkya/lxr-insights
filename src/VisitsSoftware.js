import React, {Component} from 'react';
import {VictoryBar, VictoryTooltip} from 'victory';
class VisitsSoftware extends Component{
    render(){
        return(
            <div className="panel panel-default">
            <div className="panel-heading">Visits by Software</div>
            <div className="panel-body">
            <svg viewBox="0 0 400 250"  >
            <VictoryBar labelComponent={<VictoryTooltip/>}
             height={250} horizontal style={{data: { fill: "#f58120" } }} />
             </svg>
            </div>
            </div>
        )
    }
}

export default VisitsSoftware;