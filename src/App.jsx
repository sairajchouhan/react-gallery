import React from 'react';
import './App.css';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import { useStateValue } from './context/StateProvider';

function App() {
  const [{ results }, dispatch] = useStateValue();
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Landing />
            <Main />
          </Route>
          <Route path="/search-results">
            <Landing />
            <Main />
          </Route>
          {results.map((result) => (
            <Route path={result.title}>
              <Landing />
              <Main />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
