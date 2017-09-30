import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';


//import components and containers


class App extends Component {
  render() {
    return (

        <div className="">
          <div className= "">
            <h1 className= "display-3">BankShot</h1>
            <p className= "lead">Your world wide banking leader.......Sort of.</p>
            <hr className= "my-4"/>
            <p>Quick, fast, and sometimes accurate account results. </p>
            <p className= "lead">
              <Link style={{color: 'red', textDecoration: "none"}} className= "" to="/users" role="button">
              *Click here for unrestricted access to an account of your choosing*</Link>
              </p>
            </div>
        </div>


    );
  }
}

export default App;
