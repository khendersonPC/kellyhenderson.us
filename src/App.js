
import React from "react";
import CustomSideNav from './components/CustomSideNav';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Welcome from "./pages/welcome"
import About from "./pages/about"
import Projects from "./pages/projects"
import Resume from "./pages/resume"
import Contact from "./pages/contact"

function App() {
  return ( <Router>
    <div>
      {/* <CustomSideNav /> */}
      {/* <Wrapper> */}
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
      <Route exact path="/contact" component={Contact} />
        
      {/* </Wrapper> */}
      
    </div>
  </Router>
  );
}

export default App;
