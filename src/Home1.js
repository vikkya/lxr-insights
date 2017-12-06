import React, {Component} from 'react';

class Home1 extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                <h1 className="font-white">Company Names</h1>
                    <div className="col-md-3">
                        <div className="well">
                        <h3 className="text-center"><a href="/customerdashboard">Elf Cosmetics</a></h3>
                    </div>
                        
                    </div>
                    <div className="col-md-3">
                    <div className="well">
                    <h3 className="text-center"><a href="/customerdashboard">Shiekh Shoes</a></h3>
                    </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                <h1 className="font-white">Industry</h1>
                <div className="col-md-3">
                        <div className="well">
                        <h3 className="text-center"><a href="/customerdashboard">Cosmetics</a></h3>
                    </div>
                        
                    </div>
                    <div className="col-md-3">
                    <div className="well">
                    <h3 className="text-center"><a href="/customerdashboard">Shoes</a></h3>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home1;