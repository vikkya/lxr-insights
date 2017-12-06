import React, { Component } from 'react';
import CustomerAnalysis from './CustomerAnalysis';
import NewCustomers from './NewCustomers';
import ReturnCustomers from './ReturnCustomers';
class CustomerPersona extends Component {
    render() {
        return (
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="active"><a data-toggle="tab" href="#general">General</a></li>
                    <li><a data-toggle="tab" href="#new">New</a></li>
                    <li><a data-toggle="tab" href="#returning">Returning</a></li>
                </ul>
                <div className="tab-content">
                    <div id="general" className="tab-pane fade in active">
                        <br />
                        <CustomerAnalysis />
                    </div>

                    <div id="new" className="tab-pane fade">
                        <br />
                        <NewCustomers />
                    </div>
                    <div id="returning" className="tab-pane fade">
                        <br/>
                        <ReturnCustomers />
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerPersona;