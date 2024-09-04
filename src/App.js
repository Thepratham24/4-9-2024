
import './App.css';
import Home from './screen/Home';

import React from "react";
import {                                               //copied from react router  
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screen/Login';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from './Components/Signup.js';
import * as ContextreducerJs from './Components/Contextreducer.js';

function App() {
  return (                                                        //navbar te click kro te relode krda c mtlb kise hor page te so router naal aah cheej nhi hoyegi

    <ContextreducerJs.CartProvider>
      <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/creatuser" element={<Signup />} />

        </Routes>
      </div>


    </Router>
    </ContextreducerJs.CartProvider> 
    
  );                                                                  //path of router
}

export default App;
