import "./styles/App.css";

import Nav from "./components/Nav/Nav";
import Visitor from "./pages/Visitor/Visitor";

import AddEditUser from "./components/AddEditUser/AddEditUser";

import Feed from "./components/Feed/Feed";
import Search from "./components/Search/Search";
import AddEditPost from "./components/AddEditPost/AddEditPost";
import UserProfile from "./components/UserProfile/UserProfile";

import MentalHealth from "./pages/MentalHealth/MentalHealth";
import Settings from "./pages/Settings/Settings";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

import BSOD from "./pages/BSOD/BSOD";

import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Visitor} />
        
        <Route path="/feed" exact component={Feed} />
        <Route path="/add-post" exact component={AddEditPost} />
        <Route path="/posts/:id/edit" exact component={AddEditPost} />
        
        <Route path="/search" exact component={Search} />
        
        <Route path="/add-user" exact component={AddEditUser} />
        <Route path="/user" exact component={UserProfile} />
        <Route path="/user/:id" exact component={UserProfile} />
        <Route path="/user/:id/edit" component={AddEditUser} />
        
        <Route path="/mental-health" exact component={MentalHealth} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />

        <Route path="/page-not-found" component={BSOD} />
        <Redirect to="/page-not-found" />
      </Switch>
    </div>
  );
}

export default App;