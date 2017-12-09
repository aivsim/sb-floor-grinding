import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, AboutPage, SettingsPage } from './components';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/settings" component={SettingsPage} />
      </Switch>
    );
  }
}

export default App;
