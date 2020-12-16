// import logo from './logo.svg';

import Nav from './components/Nav/Nav';
import Feed from './components/Feed/Feed';
import FormUserAddEdit from './components/FormUserAddEdit/FormUserAddEdit';

import './styles/App.css';

// const express = require('express');

function App() {
  return (
    <div className="App">
      <Nav />
      <Feed />
      <FormUserAddEdit id={5}/>
    </div>
  );
}

export default App;