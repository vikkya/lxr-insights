import React, {Component} from 'react';
import SalesGlobal from './SalesGlobal';
import MonthlyVisits from './MonthlyVisits';
import AvgTime from './AvgTime';
import GeoMap from './GeoMap';
import TopCountry from './TopCountry';
import TopCities from './TopCities';
import VisitsSoftware from './VisitsSoftware';
import VisitsDevice from './VisitsDevice';
import Recency from './Recency';
import Frequency from './Frequency';
import Channel from './Channel';
class Visits extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <SalesGlobal />
                    </div>
                    <div className="col-md-5">
                        <MonthlyVisits />
                    </div>
                    <div className="col-md-4">
                        <AvgTime />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <GeoMap />
                     </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                            <TopCountry />
                            </div>
                            <div className="col-md-6">
                            <TopCities />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <VisitsSoftware />
                            </div>
                            <div className="col-md-6">
                            <VisitsDevice />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 customHeight">
                        <Recency />
                    </div>
                    <div className="col-md-4 customHeight">
                        <Frequency />
                    </div>
                    <div className="col-md-4 customHeight">
                         <Channel />
                    </div>
                </div>
            </div>
        )
    }
}

export default Visits;