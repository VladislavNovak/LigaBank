import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {ScreenMain, ScreenMap} from '..';
import '../../sass/style.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/map" component={ScreenMap}/>
      <Route exact path="/main" component={ScreenMain}/>
    </Switch>
  </BrowserRouter>
);

export default App;
