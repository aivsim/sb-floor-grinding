import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, ServicesPage, IrangaPage, GalleryPage, PricesPage, AboutPage, ContactsPage, AciuPage } from './components';
import { Layout } from './shell';
import withTracker from './withTracker';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Layout>
          <Switch>
            <Route exact={true} path="/" component={withTracker(HomePage, { /* additional attributes */ } )}/>
            <Route path="/paslaugos" component={withTracker(ServicesPage, { /* additional attributes */ } )} />
            <Route path="/iranga" component={withTracker(IrangaPage, { /* additional attributes */ } )} />
            <Route path="/galerija" component={withTracker(GalleryPage, { /* additional attributes */ } )} />
            <Route path="/kainorastis" component={withTracker(PricesPage, { /* additional attributes */ } )} />
            <Route path="/susipazinkime" component={withTracker(AboutPage, { /* additional attributes */ } )} />
            <Route path="/susisiekime" component={withTracker(ContactsPage, { /* additional attributes */ } )} />
            <Route path="/aciu" component={withTracker(AciuPage, { /* additional attributes */ } )} /> 
            
          </Switch>
      </Layout>
    );
  }
}

export default App;
