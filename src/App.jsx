import React from 'react';
import './App.css';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
            <Main />
          </Route>
          <Route exact path="/search-results">
            <Landing />
            <Main />
          </Route>
          <Route
            exact
            path="/collections/:id"
            render={(routeProps) => (
              <>
                <Landing />
                <Main {...routeProps} />
              </>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
