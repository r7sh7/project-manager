import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
return(
  <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/project/:id' component={ProjectDetails} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </div>
  </Router>
    );
}
export default App;