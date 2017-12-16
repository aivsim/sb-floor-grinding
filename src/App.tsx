import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, ServicesPage, EquipmentPage, GalleryPage, PricesPage, AboutPage } from './components';
import { Layout } from './shell';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/paslaugos" component={ServicesPage} />
          <Route path="/iranga" component={EquipmentPage} />
          <Route path="/galerija" component={GalleryPage} />
          <Route path="/kainorastis" component={PricesPage} />
          <Route path="/susipazinkime" component={AboutPage} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
