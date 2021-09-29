import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import { routes } from "../../Routers/Routes";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Route component={Header}></Route>
        <Switch>
          {routes.map((r, i) => (
            <Route key={i} exact path={r.path} component={r.component} />
          ))}
          <Route>page not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
