import React, { Fragment, Component } from "react";
import Home from "./pages/Home";
import NotFound from './pages/NotFound'
import { AfterHeader, BeforeHeader } from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default class layout extends Component {
  render() {
    return (
      <Fragment>
       
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/blog/post/:id"  render={(...props)=>{console.log(props
                )}}/>
            <Route path="/home" 
             component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}


 