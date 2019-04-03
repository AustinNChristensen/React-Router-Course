import React, { Component } from 'react';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';
import NavBar from './Navbar';
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/players" component={Players} />
            <Route path="/teams" component={Teams} />
            {/* <Route path="/:teamId" component={Teams} /> */}
            <Route render={() => <h1 className='text-center'> Error Four oh Four - Page Not Found</h1>} />
          </Switch>
        </div>
      </Router> 
    );
  }
}

export default App;
