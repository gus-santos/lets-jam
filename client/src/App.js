// import logo from './logo.svg';

import Nav from './components/Nav/Nav';
import Feed from './components/Feed/Feed';
import NuForm from './components/NuForm/NuForm';

import './styles/App.css';

// const express = require('express');

function App() {
  return (
    <div className="App">
      <Nav />
      <Feed />
      <NuForm />
    </div>
  );
}

export default App;