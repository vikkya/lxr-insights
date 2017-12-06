import React ,{Component} from 'react';
import {VictoryPie, VictoryLegend} from 'victory';
class SalesGlobal extends Component{
    render(){
        return(
            <div className="panel panel-default">
            <div className="panel-heading">Sales Global</div>
            <div className="panel-body">
            <svg viewBox="0 0 400 400"  >
            <VictoryLegend centerTitle orientation="horizontal"
                    gutter={5} height={50}
                     style={{ border: { stroke: "black" }, title: {fontSize: 30 } }}/>
                     
                <VictoryPie innerRadius={70} 
                data={[{x: "A", y: 33},{x: "B", y: 33}, {x: "C", y: 33}]}
                 labelRadius={100}
                style={{ labels: { fontSize: 20, fill: "white"}}}/>
                </svg>
            </div>
        </div> 
        )
    }
}
export default SalesGlobal;