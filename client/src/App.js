// import logo from './logo.svg';
import './styles/App.css';

import Nav from './components/Nav/Nav';
import Feed from './components/Feed/Feed';
// import About from './components/About/About';
// import FAQ from './components/FAQ/FAQ';
// import Settings from './components/Settings/Settings';
// import Contact from './components/Contact/Contact';
import BSOD from './components/BSOD/BSOD';
import UserAddEdit from './components/UserAddEdit/UserAddEdit';
import { Switch, Route } from 'react-router-dom';

// const express = require('express');

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/' exact component={Feed} />
        {/* <Route path='/about' exact component={About} /> */}
        {/* <Route path='/FAQ' exact component={FAQ} /> */}
        {/* <Route path='/settings' exact component={Settings} /> */}
        {/* <Route path='/contact' exact component={Contact} /> */}
        <Route path='/user/:id' component={UserAddEdit} />
        <Route component={BSOD} />
      </Switch>
    </div>
  );
}

export default App;