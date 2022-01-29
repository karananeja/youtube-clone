import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Videos from './components/Videos';
import SearchPage from './components/SearchPage';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <div className='app__page'>
              <Sidebar />
              <Videos />
            </div>
          </Route>
          <Route path='/search/:searchTerm'>
            <div className='app__page'>
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
