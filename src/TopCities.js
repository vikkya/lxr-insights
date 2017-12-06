import React, {Component} from 'react';

class TopCities extends Component{
    render(){
        const divStyle ={
            height: 180
        };
        return(
            <div className="panel panel-default">
            <div className="panel-heading">Top Cities</div>
            <div className="panel-body" style={divStyle}>
            
            <table className="table">
                <tbody>
                <tr>
                    <td>1</td>
                    <td>New York</td>
                    <td>203</td>
                    <td>1.2K</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Houston</td>
                    <td>188</td>
                    <td>0.8K</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>London</td>
                    <td>100</td>
                    <td>0.2K</td>
                </tr>
                </tbody>
            </table>
            
            </div>
        </div>
        )
    }
}

export default TopCities;