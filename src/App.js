import React, { useState } from "react";
import "./styles.css";
import * as serviceWorker from './serviceWorker';
import Home from "./components/Home";
import Shop from "./components/Shop";
import Item from "./components/Item";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import data from "./data";
import Ordered from "./components/Ordered"
import Form from "./components/Form";
import Heading from "./components/Heading";
import Thankyou from "./components/Thankyou";
export default function App() {
   const {path, url } = useRouteMatch();
  const [products, setProducts] = useState(['name','value']);
  const [addNewO,setAddNewO ] = useState([{
    id:0,name:"",Psize:"",pep:"",pine:"",olive:"",sardines:""

  }]);
  const addNew = (ev,note) =>{
    const newNote = {
      id: Date.now(),
      name: note.name,
      Psize: note.Psize,
      pep: note.pep, pine: note.pine, olive: note.olive, sardines: note.sardines
    };

    setAddNewO([...addNewO, newNote]);
    console.log('newnote');
    console.log(ev.scope);
  };
  return (
   <div className="App">
     <Heading />
      <Switch>
       


          <Route path="/pizza">
            <Form id={addNewO.id} formProps={addNewO} addNew={addNew} />
          </Route>
          <Route path="/thankyou/:order">
            <Thankyou id={addNewO.id}orders={addNewO.name} />
            
          </Route>
        {/* <Route path="/shop/:itemId/valueterm/:moreInfo">
          <Item items={products} />
        </Route>
        <Route path="/shop/:itemId">
          <Item items={products} />
        </Route>

        <Route
          path="/shop"
          render={(props) => <Shop history={props.history} items={products} />}
        /> */}

    
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}


//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
