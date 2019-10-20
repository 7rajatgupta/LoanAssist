import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Generate from "./components/Generate/Generate";
import NotFound from "./components/NotFound/NotFound";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/generate" exact component={Generate} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
