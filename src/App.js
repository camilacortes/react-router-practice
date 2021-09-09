import React from "react";
import Home from '../src/components/Home'
import About from '../src/components/About'
import Services from '../src/components/Services'

import {Switch, Route, Link} from "react-router-dom"

function App() {
  return (
    <div>
    <nav className="navigation">
      <ul>
      <Link className="links" to="/">Home</Link>
      <Link className="links" to="/About">About</Link>
      <Link className="links" to="/Services">Services</Link>
      </ul>
    </nav>

    <Switch>
      <Route exact path="/">{Home}</Route>
      <Route path="/About">{About}</Route>
      <Route path="/Services">{Services}</Route>
    </Switch>

    </div>
  );
}

export default App;
