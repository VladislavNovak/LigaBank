import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {Container} from '..';
import '../../sass/style.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Container}/>
    </Switch>
  </BrowserRouter>
);

export default App;
