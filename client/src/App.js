// import logo from './logo.svg';
import './styles/App.css';


import Nav from './components/Nav/Nav';
import Feed from './components/Feed/Feed';
import UserAddEdit from './components/UserAddEdit/UserAddEdit';
import { Switch, Route } from 'react-router-dom';

// const express = require('express');

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/' exact component={Feed} />
        <Route path='/user/:id' component={UserAddEdit} />
      </Switch>
    </div>
  );
}

export default App;