import "./styles/App.css";

import Nav from "./components/Nav/Nav";
import Visitor from "./components/Visitor/Visitor";

import UserAddEdit from "./components/UserAddEdit/UserAddEdit";

import Feed from "./components/Feed/Feed";
import Search from "./components/Search/Search";
import PostAddEdit from "./components/PostAddEdit/PostAddEdit";
import UserProfile from "./components/UserProfile/UserProfile";

import MentalHealth from "./components/MentalHealth/MentalHealth";
import Settings from "./components/Settings/Settings";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

import BSOD from "./components/BSOD/BSOD";
import { Switch, Route } from "react-router-dom";

// const express = require("express");

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Visitor} />
        <Route path="/feed" exact component={Feed} />
        <Route path="/posts/:id/edit" exact component={PostAddEdit} />
        <Route path="/add-post" exact component={PostAddEdit} />
        
        <Route path="/search" exact component={Search} />
        
        <Route path="/add-user" exact component={UserAddEdit} />
        <Route path="/user" exact component={UserProfile} />
        <Route path="/user/:id" exact component={UserProfile} />
        <Route path="/user/:id/edit" component={UserAddEdit} />
        
        <Route path="/mental-health" exact component={MentalHealth} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />

        <Route path="*" component={BSOD} />
      </Switch>
    </div>
  );
}

export default App;