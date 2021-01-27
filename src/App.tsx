import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Notes from "./components/notes";
import CurrentNote from "./components/currentNote";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/notes/note/:id" component={CurrentNote} />
        <Route exact path="*">
          <Redirect to="/notes" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
