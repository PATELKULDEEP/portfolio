import React from "react";
import Homepage from "./components/HomepageComponent/Homepage";
import {HashRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/FooterComponent/Footer";
import FullProjects from "./components/ProjectsComponent/FullProjects";
import Travel from "./components/TravelComponent/Travel";
import ScrollToTop from "./components/ScrollToTop";
import './App.css';
import MainAchievements from "./components/AchievementsComponent/MainAchievements";
import { ThemeProvider } from "./components/ThemeComponent/ThemeContext";

function App() {
  return (
      
    <ThemeProvider>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/portfolio" component={Homepage} />
            <Route exact path="/portfolio/projects" component={FullProjects} />
            <Route exact path="/portfolio/achievements" component={MainAchievements} />
            <Route exact path="/portfolio/travel" component={Travel} />
          </Switch>
          <Footer/>
        </ScrollToTop>
      </Router>
    </ThemeProvider>

  );
}

export default App;
