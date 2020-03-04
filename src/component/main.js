import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
// import Aboutme from './aboutme';
import Project from './project';
import Contact from './contact';
import Resume from './resume';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        {/* <Route exact path="/aboutme" component={Aboutme} /> */}
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/resume" component={Resume} />
    </Switch>
)
export default Main;
