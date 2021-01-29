import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Notes from "./components/notes";
import CurrentNote from "./components/currentNote";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Заметки - Сбербанк</title>
          <link rel="canonical" href="http://sber-test.com/" />
          <link
            rel="icon"
            href="https://www.sberbank.ru/portalserver/static/templates/%5BBBHOST%5D/RuMasterpageTemplate/static/favicon.ico"
          />
        </Helmet>
        <Switch>
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/notes/note/:id" component={CurrentNote} />
          <Route exact path="*">
            <Redirect to="/notes" />
          </Route>
        </Switch>
      </div>
    </HelmetProvider>
  );
}

export default App;
