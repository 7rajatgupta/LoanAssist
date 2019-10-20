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
      <Router>
        <div>
          <Nav />
        </div>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/generate" component={Generate} />
            <Route path="/NotFound" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
