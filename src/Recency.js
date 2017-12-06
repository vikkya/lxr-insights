import React, {Component} from 'react';

class Recency extends Component{
    render(){
        return(
            <div className="panel panel-default">
            <div className="panel-heading">Recency</div>
            <div className="panel-body customHeight">
            <table className="table">
                <thead>
                <tr>
                    <th>Days Since Last Visit</th>
                    <th>Visits</th>
                    <th>Visits (YTD)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>0</td>
                    <td>100</td>
                    <td>1.2K</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>80</td>
                    <td>0.9K</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>70</td>
                    <td>0.6K</td>
                </tr>
                </tbody>
            </table>
            </div>
            </div>
        )
    }
}
export default Recency;