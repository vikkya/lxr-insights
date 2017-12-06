import React, {Component} from 'react';
import api from '../utils/api';
import * as d3 from 'd3';
class NewCustomers extends Component{
    state = {
        dRevenue: 0,
        mRevenue: 0,
        highValueCustomerPrice: 0,
        avgItems: 0,
        personaRevenue: 0,
        avgVisits: 0,
        desktopBuying: 0,
        dekstopPPC: 0,
        dektopWeekOfDay: 'Noday',
        avgBagValueDesktop: 0,
        weekOfDayBuyingChancesdesk: 0,
        mostBuyingHoursDesktop: 0,
        mobileBuying: 0,
        mobilePPC: 0,
        mobileWeekOfDay: 'Noday',
        avgBagValueMobile: 0,
        weekOfDayBuyingChancesMob: 0,
        mostBuyingHoursMobile: 0
    }

    componentDidMount() {
        api.userData()
            .then((repo) => {
                console.log(repo);
            });
        api.fetchData()
            .then((repo) => {
                repo.forEach((d) => {
                    d.shipping = parseFloat(d.shipping);
                    d.tax = parseFloat(d.tax);
                    d.price = parseFloat(d.price);
                    d.total = Math.round(d.shipping + d.tax + d.price);
                })

                var totalRevenue = d3.sum(repo, function (d) {
                    return d.total;
                });
                var desktopData = repo.filter(function (d) {
                    return d.device === "DESKTOP";
                });
                var mobileData = repo.filter(function (d) {
                    return d.device === "MOBILE";
                });
                var desktopRevenue = d3.sum(desktopData, function (d) {
                    return d.total;
                });
                var mobileRevenue = d3.sum(mobileData, function (d) {
                    return d.total;
                });

                this.setState({
                    dRevenue: JSON.stringify(Math.round(desktopRevenue / totalRevenue * 100)),
                    mRevenue: JSON.stringify(Math.round(mobileRevenue / totalRevenue * 100))
                })
                api.aggregatedData()
                    .then((repo) => {
                        this.setState({
                            highValueCustomerPrice: JSON.stringify(repo.highValueCustomerPrice),
                            avgItems: JSON.stringify(repo.avgItems),
                            personaRevenue: JSON.stringify(repo.personaRevenue),
                            avgVisits: JSON.stringify(repo.avgVisits),
                            desktopBuying: JSON.stringify(repo.desktopBuying),
                            dekstopPPC: JSON.stringify(repo.dekstopPPC),
                            dektopWeekOfDay: JSON.stringify(repo.dektopWeekOfDay),
                            avgBagValueDesktop: JSON.stringify(repo.avgBagValueDesktop),
                            weekOfDayBuyingChancesdesk: JSON.stringify(repo.weekOfDayBuyingChancesdesk),
                            mostBuyingHoursDesktop: JSON.stringify(repo.mostBuyingHoursDesktop),
                            mobileBuying: JSON.stringify(repo.mobileBuying),
                            mobilePPC: JSON.stringify(repo.mobilePPC),
                            mobileWeekOfDay: JSON.stringify(repo.mobileWeekOfDay),
                            avgBagValueMobile: JSON.stringify(repo.avgBagValueMobile),
                            weekOfDayBuyingChancesMob: JSON.stringify(repo.weekOfDayBuyingChancesMob),
                            mostBuyingHoursMobile: JSON.stringify(repo.mostBuyingHoursMobile)
                        })
                    })
            })

    }
    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-4" >
                <img   src='https://3.bp.blogspot.com/-f0xPf3zOHRY/WfwcP-Js-EI/AAAAAAAAER4/7D8lOJJFtggeJgDzUKwgtsopn4PptQNSgCLcBGAs/s320/main_girl.jpg' 
                        className="img-circle img-responsive" alt="customer" width={200} height={200}/>
                </div>
                <div className="col-md-4 ">
                    <div className="panel panel-default ">
                        <div className="panel-heading">Jane's Bio</div>

                        <ul className="list-group">
                            <li className="list-group-item"><i className="glyphicon glyphicon-star" style={{ color: '#f88100' }}></i> Jane, resident of East Cost, belongs to Age Groups of 25-34.</li>
                            <li className="list-group-item"><i className="glyphicon glyphicon-star" style={{ color: '#f88100' }}></i> She represents customer whose monthly purchase are over ${this.state.highValueCustomerPrice}.</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">Key Insights</div>

                        <ul className="list-group">
                            <li className="list-group-item"><i className="glyphicon glyphicon-star" style={{ color: '#f88100' }}></i> Avg. number of items bought are {this.state.avgItems}-{parseInt(this.state.avgItems, 10) + 1} in an order in April, 2017.</li>
                            <li className="list-group-item"><i className="glyphicon glyphicon-star" style={{ color: '#f88100' }}></i> This persona amounts to {this.state.personaRevenue} of revenue for in April, 2017.</li>
                            <li className="list-group-item"><i className="glyphicon glyphicon-star" style={{ color: '#f88100' }}></i> Avg. number of visits to the website was {this.state.avgVisits} times in April, 2017.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Know your Customer</div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="media">
                                        <div className="media-left media-middle">
                                            <i className="fa fa-desktop fa-4x" ></i>
                                        </div>
                                        <div className="media-body">
                                            <ul className="mylist" >
                                                <li className="">Most likely to buy between {this.state.mostBuyingHoursDesktop}</li>
                                                <li className="">Chances of buying through desktop is {this.state.dRevenue}%</li>
                                                <li className="">5% chance of him buying through a paid campaign</li>
                                                <li className="">{this.state.avgBagValueDesktop} chance of buying on {this.state.dektopWeekOfDay} which is highest among all days of week</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="media">
                                        <div className="media-right media-middle">
                                            <i className="fa fa-mobile fa-5x" ></i>
                                        </div>
                                        <div className="media-body">
                                            <ul className="mylist">
                                                <li className="">Most likely to buy between {this.state.mostBuyingHoursMobile}</li>
                                                <li className="">Chances of buying through mobile is {this.state.mRevenue}%</li>
                                                <li className="">3% chance of him buying through a paid campaign</li>
                                                <li className="">{this.state.avgBagValueMobile} chance of buying on {this.state.mobileWeekOfDay} which is highest among all days of week</li>
                                            </ul>
                                        </div>
                                    </div>
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
export default NewCustomers;