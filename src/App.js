import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './componants/Home/Home';
import Employee from './componants/Employee/Employee';
import SingleEmployee from './componants/SingleEmployee/SingleEmployee';
import NotFound from './componants/NotFound/NotFound';
import Navbar from './componants/Navbar/Navbar';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/employee">
            <Employee/>
          </Route>
          <Route exact path="/employee/:id">
            <SingleEmployee/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
