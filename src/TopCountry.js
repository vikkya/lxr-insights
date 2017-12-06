import React, {Component} from 'react';
import {VictoryBar, VictoryTooltip} from 'victory';
class TopCounrty extends Component{
    render(){
        return(
            <div className="panel panel-default">
            <div className="panel-heading">Top Countires</div>
            <div className="panel-body">
            <svg viewBox="0 0 400 250"  >   
            <VictoryBar labelComponent={<VictoryTooltip/>}
            height={250} horizontal style={{data: { fill: "#c43a31" } }} />
            </svg>
            </div>
            </div>
        )
    }
}
export default TopCounrty;