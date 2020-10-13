import React, { useState } from "react";
import "./styles.css";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Item from "./components/Item";
import { Route, Link, Switch } from "react-router-dom";
import data from "./data";
import Form from "./components/Form";
import Heading from "./components/Heading";
import Thankyou from "./components/Thankyou";
export default function App() {
   
  const [products, setProducts] = useState(data);

  return (
   <div className="App">
     <Heading />
      <Switch>
       


          <Route path="/pizza">
            <Form />
          </Route>
          <Route path="/thankyou/:order">
            <Thankyou name={products} />
          </Route>
        <Route path="/shop/:itemId/valueterm/:moreInfo">
          <Item items={products} />
        </Route>
        <Route path="/shop/:itemId">
          <Item items={products} />
        </Route>

        <Route
          path="/shop"
          render={(props) => <Shop history={props.history} items={products} />}
        />

    
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}
