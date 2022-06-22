
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import ProblemPage from './ProblemPage'
import React from "react";
import Checkout from "./Checkout"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Header />

        <Switch>

          <Route path='/checkout'>
            <Checkout />
          </Route>

          <Route path='/problem'>
            <ProblemPage />
          </Route>

          <Route path='/'>
            <Home />
          </Route>

        </Switch>
        
      <Footer />
    </Router>  

    </div>
  );
}

export default App;
