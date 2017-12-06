import React from 'react';
import {Route, Router} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Home1 from './Home1';
import Visits from './Visits';
import GeoMap from './GeoMap';
import Summary from './CustomerSummary/Summary';
import Background from './Background';
import CustomerPersona from './CustomerPersona/CustomerPersona';
import CustomerDashboard from './CustomerDashboard/CustomerDashboard';
import CustomerJourney from './CustomerJourney/CustomerJourney';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
//import {Route, Router} from 'react-router-dom';
// var ReactRouter = require('react-router-dom');
// var Router = ReactRouter.BrowserRouter;
// var Route = ReactRouter.Route;
const auth = new Auth();
const handleAuthentication = (nextState, replace) => {
  if(/access_token|id_token|error/.test(nextState.location.hash)){
      auth.handleAuthentication();
  }
}
// class App extends Component {
//   render() {
//     return (
      
//       <Router>
//         <div className="App" >
//         <Navbar />
//         <Route exact path="/" component={Background} />
//         <Route path="/dashboard" component={Dashboard} />
//         <Route path = "/visits" component={Visits} />
//         <Route path= "/geomap" component={GeoMap} />
//         <Route path= "/customeranalysis" component={CustomerAnalysis} />
//         <Route path="/login" component={Login} />
        
//         <Footer />
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
export const makeMainRoutes = () => {
  return(
    <Router history={history} component={Navbar}>
    <div>
      
      <Route path="/" render={(props) => <Navbar auth={auth} {...props}/> } />
      <Route exact path="/" component={Background} /> 
      <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />\
      <Route path="/home1" component={Home1} />
      <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} />
            }} />
      {/* <Route path = "/visits" component={Visits} /> */}
      <Route path="/summary" component={Summary} />
      <Route path= "/geomap" component={GeoMap} />
      <Route path= "/customeranalysis" component={CustomerPersona} />
      <Route path= "/customerdashboard" component={CustomerDashboard} />
      <Route path= "/customerjourney" component={CustomerJourney} />
      <Footer />   
    </div>
    </Router>
  );
}