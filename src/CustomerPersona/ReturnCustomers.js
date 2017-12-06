import React, {Component} from 'react';

class ReturnCustomers extends Component{
    render(){
        return(
            <div className="container">
            <div className="row ">
               <div className="col-md-4" >
                    <img   src='https://1.bp.blogspot.com/-31aAGxSP_aI/Wf_4Pffn4TI/AAAAAAAAES0/jKf0JIHPA2gitopco1W7It-ZgdMhHaiZgCLcBGAs/s320/shoe%2Bwali.jpg' 
                    className="img-circle img-responsive" alt="customer" width={200} height={200}/>
               </div>
               <div className="col-md-4 ">
                    <div className="panel panel-default ">
                    <div className="panel-heading">Sidney's Bio</div>
                    
                    <ul className="list-group">
                        <li className="list-group-item"><i className="glyphicon glyphicon-star" style={{color:'#f88100'}}></i> Sidney, in the age group 20-25 lives in California.</li>
                        <li className="list-group-item"><i className="glyphicon glyphicon-star" style={{color:'#f88100'}}></i> She represents customers whose monthly purchases are above $200.</li>
                    </ul>
                    </div>
               </div>
               <div className="col-md-4">
                <div className="panel panel-default">
                    <div className="panel-heading">Key Insights</div>
                    
                    <ul className="list-group">
                        <li className="list-group-item"><i className="glyphicon glyphicon-star" style={{color:'#f88100'}}></i> She purchases 3-4 items in an order.</li>
                        <li className="list-group-item"><i className="glyphicon glyphicon-star" style={{color:'#f88100'}}></i> Her bag value amounts to $160.</li>
                        <li className="list-group-item"><i className="glyphicon glyphicon-star" style={{color:'#f88100'}}></i> She visits the website 10-15 times a month.</li>
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
                                <li className="">Most likely to buy between 2 PM to 3 PM</li>
                                
                                <li className="">1% chance of her buying through a paid campaign</li>
                                <li className="">16% chance of buying on Friday which is highest among all days of week</li>
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
                                <li className="">Most likely to buy between 4 PM to 6 PM</li>
                                
                                <li className="">3% chance of her buying through a paid campaign</li>
                                <li className="">15% chance of buying on Sunday which is highest among all days of week</li>
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
export default ReturnCustomers;