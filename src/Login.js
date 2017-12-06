import React, {Component} from 'react';

class Login extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="well">
                        <form className="form-horizontal">
                            <fieldset>
                                <legend>Login Here</legend>
                                <div className="form-group">
                                    <label htmlFor="inputbid" className="col-lg-3 control-label">Business Id</label>
                                <div className="col-lg-9">
                                    <input type="text" className="form-control" id="inputbid" placeholder="Business Id" />
                                </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword" className="col-lg-3 control-label">Password</label>
                                <div className="col-lg-9">
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                                </div>
                                <div className="form-group">
                                    <div className="text-center">
                                        <button type="reset" className="btn btn-default">Cancel</button>&nbsp;
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;