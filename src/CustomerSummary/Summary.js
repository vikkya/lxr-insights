import React, { Component } from 'react';
import '../App.css';
class Summary extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 font-white">
                        <h1 className="text-center">New Customers</h1><br />
                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Top 3 Regions</div>
                                    <div className="panel-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>S.No.</th>
                                                    <th>State</th>
                                                    <th>Change</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>NJ</td>
                                                    <td>3 &uarr;</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>TX</td>
                                                    <td>1 &uarr;</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>CA</td>
                                                    <td>2 &darr;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Bottom 3 Regions</div>
                                    <div className="panel-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>S.No.</th>
                                                    <th>State</th>
                                                    <th>Change</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>NJ</td>
                                                    <td>3 &uarr;</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>TX</td>
                                                    <td>1 &uarr;</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>CA</td>
                                                    <td>2 &darr;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Browser Stats</div>
                                    <div className="panel-body">
                                        
                                            
                                            <p >IE Share went down by 15% &darr;</p>
                                            
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Device Stats</div>
                                    <div className="panel-body">
                                            
                                            <p >Desktop Share went up by 25% &uarr;</p>
                                            
                                            
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Day of Week</div>
                                    <div className="panel-body">
                                    35% chance of buying on Wednesday which is highest among all days of week
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Hour of Day</div>
                                    <div className="panel-body">
                                    <p>Most likely to buy between 6PM to 10PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Top Products</div>
                                    <div className="panel-body">
                                    <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>S.No.</th>
                                                    <th>Product Name</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>accusantium doloremque laudantium, totam</td>

                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>accusantium doloremque laudantium, totam</td>

                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>accusantium doloremque laudantium, totam</td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 font-white">
                        <h1 className="text-center ">Returning Customers</h1><br />
                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Top 3 Regions </div>
                                    <div className="panel-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>S.No.</th>
                                                    <th>State</th>
                                                    <th>Change</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>WI</td>
                                                    <td>3 &uarr;</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>NC</td>
                                                    <td>1 &uarr;</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>AL</td>
                                                    <td>2 &darr;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Bottom 3 Regions </div>
                                    <div className="panel-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>S.No.</th>
                                                    <th>State</th>
                                                    <th>Change</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>WI</td>
                                                    <td>3 &uarr;</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>NC</td>
                                                    <td>1 &uarr;</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>AL</td>
                                                    <td>2 &darr;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Browser Stats</div>
                                    <div className="panel-body">
                                    
                                            <p>Chrome Share went up by 25% &uarr;</p> 
                                            
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Device Stats</div>
                                    <div className="panel-body">
                                    
                                            <p>Mobile Share went up by 20% &uarr;</p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Day of Week</div>
                                    <div className="panel-body">45% chance of buying on Tuesday which is highest among all days of week</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Hour of Day</div>
                                    <div className="panel-body">
                                    Most likely to buy between 7PM to 11PM
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Top Products</div>
                                    <div className="panel-body">
                                    <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>S.No.</th>
                                                    <th>Product Name</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>consectetur adipiscing elit</td>

                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>consectetur adipiscing elit</td>

                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>consectetur adipiscing elit</td>
                                                    
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Summary;