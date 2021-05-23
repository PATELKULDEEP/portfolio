import React from "react";
import Homepage from "./components/HomepageComponent/Homepage";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/HeaderComponent/Header";
import Footer from "./components/FooterComponent/Footer";
import FullProjects from "./components/ProjectsComponent/FullProjects";
import MainContact from "./components/ContactComponent/MainContact";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
      
    <Router>
      <ScrollToTop>

      {/* <Header/> */}
        <Switch>
            <Route exact path="/portfolio" component={Homepage} />
            <Route exact path="/portfolio/projects" component={FullProjects} />
            <Route exact path="/portfolio/contact" component={MainContact} />
        </Switch>
        <Footer/>
      </ScrollToTop>
    </Router>

  );
}

export default App;
