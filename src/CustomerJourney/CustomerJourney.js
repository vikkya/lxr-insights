import React, { Component } from 'react';
import TotalCustomers from './TotalCustomers';
import Browsers from './Browsers';
import DayofWeek from './DayofWeek';
class CustomerJourney extends Component {
    render() {
        return (
            <div className="container">
                <div className="row font-white">
                    <div className="col-md-8"><h1>Client Name Customer Journey</h1></div>
                    <div className="col-md-4">
                        <form action="" className="form-horizontal">
                        <div className="form-group">
                        <select className="font-black form-control">
                            <option>Nov</option>
                            <option>Dec</option>
                        </select>
                        </div>
                        </form>
                    </div>
                    
                    <div className="col-md-12">
                        <table className="table">
                        <thead>
                            <tr >
                                <th style={{textAlign: 'center'}}>Data</th>
                                <th style={{textAlign: 'center'}}>1st Visit</th>
                                <th style={{textAlign: 'center'}}>2nd Visit</th>
                                <th style={{textAlign: 'center'}}>3rd Visit</th>
                                <th style={{textAlign: 'center'}}>Others</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <td><h3>Total Customers</h3></td>
                                <td><TotalCustomers /></td>
                            </tr> */}
                            <tr>
                                <td style={{verticalAlign: 'middle', fontWeight:'bold'}}>Browser</td>
                                <td><Browsers /></td>
                                <td><Browsers /></td>
                                <td><Browsers /></td>
                                <td><Browsers /></td>
                            </tr>
                            <tr>
                                <td  style={{verticalAlign: 'middle', fontWeight:'bold'}}>Day of Week</td>
                                <td><DayofWeek /></td>
                                <td><DayofWeek /></td>
                                <td><DayofWeek /></td>
                                <td><DayofWeek /></td>
                            </tr>
                            <tr>
                                <td  style={{verticalAlign: 'middle', fontWeight:'bold'}}>Hour of Day</td>
                                <td><img width="250" height="300" src="https://3.bp.blogspot.com/-RgBj3pjY47E/Wif3A1oz-QI/AAAAAAAAET0/5F53eNtiWWw1lDIWGr5bjy2DNRexI4Z_QCLcBGAs/s320/heatmap.png"/></td>
                                <td><img width="250" height="300" src="https://3.bp.blogspot.com/-RgBj3pjY47E/Wif3A1oz-QI/AAAAAAAAET0/5F53eNtiWWw1lDIWGr5bjy2DNRexI4Z_QCLcBGAs/s320/heatmap.png"/></td>
                                <td><img width="250" height="300" src="https://3.bp.blogspot.com/-RgBj3pjY47E/Wif3A1oz-QI/AAAAAAAAET0/5F53eNtiWWw1lDIWGr5bjy2DNRexI4Z_QCLcBGAs/s320/heatmap.png"/></td>
                                <td><img width="250" height="300" src="https://3.bp.blogspot.com/-RgBj3pjY47E/Wif3A1oz-QI/AAAAAAAAET0/5F53eNtiWWw1lDIWGr5bjy2DNRexI4Z_QCLcBGAs/s320/heatmap.png"/></td>
                                
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerJourney;