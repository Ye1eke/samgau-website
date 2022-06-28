
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import ProblemPage from './ProblemPage'
import React, { useEffect } from "react";
import Checkout from "./Checkout"
import Login from "./Login"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);
      
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser

        })
      } else {
          dispatch({
            type: 'SET_USER',
            user: null

          })
      }
    })
  }, [])

  return (
    
    <Router>
      <div className="App">
       
        
      
      <nav>  
          <Header />
          </nav>
          
          <Routes>
          
            <Route path="/login" element={<Login />}>
            
            </Route>
            
            <Route path="/checkout" element={<Checkout />}>
            
            </Route>
          
            <Route path="/problem" element={<ProblemPage />} />
              
            <Route path="/" element={<Home />}/>
            
          </Routes>
     
        <Footer />

      </div>
    </Router>  

  );
}

export default App;
