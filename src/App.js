import React from "react";
import Home from '../src/components/Home'
import About from '../src/components/About'
import Services from '../src/components/Services'

import {Switch, Route, Link} from "react-router-dom"

function App() {
  return (
    <div>
    <nav className="Navigation">
      <Link to="/"><Home/></Link>
      <Link to="/About"><About/></Link>
      <Link to="/Services"><Services/></Link>
    </nav>
    </div>
  );
}

export default App;
