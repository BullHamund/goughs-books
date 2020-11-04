import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const FictionPage = () => (
  <div>
    <h1>Fiction Page!</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/fiction' component={FictionPage} />
      </Switch>
    </div>
  );
}

export default App;
