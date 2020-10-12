import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./styles.css";

import "../styles.css";
// import Home from "./components/Home";
// import Shop from "./components/Shop";
// import Item from "./components/Item";
// import { Route, Link, Switch } from "react-router-dom";
// import data from "./data";
// import Form from "./components/Form";
// import Thankyou from "./components/Thankyou";
export default function Heading() {


  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Lambda EETZ</h1>
        <div className="nav-links">
          {/* Link is an <a> with default behavior re-written so that navigation is handled purely client-side. No server requests for new HTML/JS/CSS!*/}
          <Link to="/">Home</Link>
          <Link to="/pizza">EET</Link>
        </div>
      </nav>
      
    </div>
  );
}
