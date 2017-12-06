import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import api from './utils/api';

function ClientName(props){
    return(
    <div className="row text-center">
        <h1 className="font-white">Client Names</h1>
        {props.repos.map(function(repo){
            //console.log(repo)
            return(
                <div className="col-md-4" key={repo.clientName}>
                <div className="well">
                <h3><Link to={`/customeranalysis/${repo.businessAssocId}`}>{repo.clientName}</Link></h3>
                </div>
                </div>
            )
        })}
    </div>
    )
}
function IndustryName(props){
    return(
        <div className="row">
            <form>
                <div className="form-group">
                <label className="font-white" htmlFor="industry">Select a Industry</label>
                <select className="form-control" id="industry">
                    {props.repos.map(function(repo){
                        return(
                            <option key={repo.businessAssocId}>{repo.organisation}</option>
                        )
                    })}
                </select>
                </div>
            </form>
        </div>
    )
}
class Home extends Component{
    login() {
        this.props.auth.login();
      }
    constructor(props){
        super(props);
        this.state = {
            repos: null
        };
        this.updateData = this.updateData.bind(this);
    }
    componentDidMount(){
        this.updateData()
    }
    updateData(){
        api.clientInfo()
        .then(function(repos){
            this.setState(function(){
                return{
                    repos: repos
                }
            });
        }.bind(this));
    }
    render(){
        const { isAuthenticated } = this.props.auth;
        return(
            <div className="container">
                {
          isAuthenticated() && (
              <h4>
                You are logged in!
                {!this.state.repos ? <p>Loadin...</p> : <IndustryName repos={this.state.repos} />}
                {!this.state.repos? <p>Loading...</p> : <ClientName repos={this.state.repos}/>}
   
              </h4>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
                         </div>
            
        )
    }
}
export default Home;