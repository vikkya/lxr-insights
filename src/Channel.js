import React, {Component} from 'react';
import {VictoryBar, VictoryTooltip} from 'victory';
class Channel extends Component{
    render(){
        return(
            <div className="panel panel-default">
            <div className="panel-heading">Channel Contribution</div>
            <div className="panel-body">
            <svg viewBox="0 0 400 200"  >
            <VictoryBar labelComponent={<VictoryTooltip/>}
             height={200} horizontal style={{data: { fill: "#f58120" } }} />
             </svg>
            </div>
            </div>
        )
    }
}

export default Channel;