import React from 'react';
import './App.css'
import { Route, Switch, Link } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'

function HatsPage() {
  return (
    <h1>Hello hats</h1>
  )
}
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
