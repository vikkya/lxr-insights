import React, {Component} from 'react';
import {VictoryPie, VictoryTooltip} from 'victory';
class VisitsDevice extends Component{
    render(){
        return(
            <div className="panel panel-default">
            <div className="panel-heading">Visits by Device</div>
            <div className="panel-body">
            <VictoryPie labelComponent={<VictoryTooltip/>} height={250} colorScale={["orange", "gold", "cyan" ]} />
            </div>
            </div>
        )
    }
}
export default VisitsDevice;
