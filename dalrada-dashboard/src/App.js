import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';



// Import All Pages 
import Dashboard from './components/Dashboard/dashboard';
import CreateRole from './components/CreateRole/createrole';
import UserManagement from './components/UserManagement/usermanagement';
import WareHouseManagement from './components/WareHouseManagement/warehousemanagement';
import Upload from './components/Upload/upload';
import Reconcile from './components/Reconcile/reconcile';
import Login from './components/Login/login';
import ForgatPassword from './components/ForgatPassword/forgatpassword';
import Nav from './components/Nav/nav';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" component={Nav}/> 
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/createrole" component={CreateRole} />
          <Route path="/usermanagement" component={UserManagement} />
          <Route path="/warehousemanagement" component={WareHouseManagement} />
          <Route path="/upload" component={Upload} />
          <Route path="/reconcile" component={Reconcile} />
          <Route path="/login" component={Login} />
          <Route path="/forgatpassword" component={ForgatPassword} /> 
        </div>
      </Router>

    );
  }
}


export default App;
