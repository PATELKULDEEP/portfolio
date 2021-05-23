import React from "react";
import Homepage from "./components/HomepageComponent/Homepage";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/HeaderComponent/Header";
import Footer from "./components/FooterComponent/Footer";
function App() {
  return (
      
    <Router>

      {/* <Header/> */}
        <Switch>
            <Route exact path="/portfolio" component={Homepage} />
        </Switch>
        <Footer/>
    </Router>

  );
}

export default App;
