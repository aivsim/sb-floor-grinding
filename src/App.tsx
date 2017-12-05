import * as React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
// import { HomePage, AboutPage, SettingsPage } from './components';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              {/* <li><Link to="/settings">Settings</Link></li> */}
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/settings" component={SettingsPage} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
  </div>
);

const About = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
);

export default App;
