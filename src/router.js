import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// route components
import Home from "./components/routes/home";
import EventsCSE from "./components/routes/cse";
import EventsECE from "./components/routes/ece";
import EventsIT from "./components/routes/it";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events/departments/cse" exact component={EventsCSE} />
          <Route path="/events/departments/it" exact component={EventsIT} />
          <Route path="/events/departments/ece" exact component={EventsECE} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
