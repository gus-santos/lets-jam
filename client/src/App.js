import "./styles/App.css";

import Nav from "./components/Nav/Nav";
import Visitor from "./components/Visitor/Visitor";
import Feed from "./components/Feed/Feed";
import Search from "./components/Search/Search";
import FormPost from "./components/FormPost/FormPost";
import UserProfile from "./components/UserProfile/UserProfile";
import Settings from "./components/Settings/Settings";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import BSOD from "./components/BSOD/BSOD";
import UserAddEdit from "./components/UserAddEdit/UserAddEdit";
import { Switch, Route } from "react-router-dom";

// const express = require("express");

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Visitor} />
        <Route path="/feed" exact component={Feed} />
        <Route path="/search" exact component={Search} />
        <Route path="/post" exact component={FormPost} />
        <Route path="/my-profile" exact component={UserProfile} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route path="/add-user" exact component={UserAddEdit} />
        <Route path="/user/edit/:id" component={UserAddEdit} />
        <Route path= "*" component={BSOD} />
      </Switch>
    </div>
  );
}

export default App;