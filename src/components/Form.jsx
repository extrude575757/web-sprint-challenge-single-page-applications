import React,  { useState, useEffect } from 'react'
// import styled from 'styled-components'
import '../App.css';
import axios from 'axios'
import { BrowserRouter as Route, Link, useRouteMatch, useParams } from 'react-router-dom'
// import React, from 'react'
import Fbtn from './Fbtn';
import Thankyou from './Thankyou';
import Ordered from './Ordered';

const Form = (props) =>{
    const {formProps} = props;
    const [order,setOrder] = useState({id:0,name: "", Psize: "",
    pep: "",pine: "", olive:"", sardines:""} );
    const [serverError,setServerError] = useState('');
    const [sub,setSub] = useState(false)
    const { url, path } = useRouteMatch();
    const [post,setPost] = useState('');
    const changeit = (ev) =>{
        ev.persist();
        // const ch=    ev.target.type ==="checkbox" ?  {...order, [ev.target.checked]: ev.target.value} : {...order,[ev.target.name]: ev.target.value};
       const ch = {...order,[ev.target.name]: ev.target.value};
       
       
        setOrder(ch);
    

        
        
        console.log('changed now')
        console.log(order);
    };

    const changer = (ev) =>{
        ev.persist();
        if(ev.target.type == "checkbox"){
            console.log("checkbox")
            const chk = {...order,[ev.target.name]: ev.target.value};
            // console.log(chk);
            setOrder(chk);
        }else{
            const chk = {...order,[ev.target.name]: ev.target.value};
        // console.log(chk);
        setOrder(chk);
        }
        console.log(order);
    }

   
    const handleSubmite = (e,ords) =>{
     if(sub === false){
         
        e.preventDefault();
        // props.addNew(e,ords);
      
        
        console.log('handle Submite')
        console.log(order);
        
        setSub(true);

  props.addNew(e,ords);

     }else{
         setSub(false);
     }
        // if(sub === false){
        //     // e.preventDefault();
        //     setSub(true);
        // axios.post(`${url}/thankyou/`,order)
        // .then(evn =>{
        //     // debugger;
        //     console.log('ev')
        //     console.log(evn);
        //     // setRes(evn);
            

        // })
        // .catch(er =>{
        //     console.log(er);
        // })
        // }else{
        //     console.log('went false');

        //     setSub(false);
        // }
            
            
    };

    
    return (
        sub
        ?
        <Route  history={props.history} path={`${path}/thankyou`} render={(props) => <Thankyou orders={props.order} />} />
                :
        <div className="App">
            <label htmlFor={"order"}>Lambda EEtz: Order Form</label>
            <form name="order" className="App" onSubmit={handleSubmite}>
                <label htmlFor="name">Name</label>
                <input data-cy="namer"
                onChange={e =>{changeit(e)}}type="text"
                 name="name"  />
                <label htmlFor="Psize">Size</label>
                <select data-cy="psizes" onChange={e => {changer(e)}}
                 name="Psize" required>
                    <option value="XXL">XXL</option>
                    <option value="Large">Large</option>
                    <option value="Small">SMall</option>
                </select>
                <label htmlFor="pep">Pepperronie</label>
                <input 
                 onChange={e => {changer(e)}}
                  type="checkbox" name="pep" />
                <label htmlFor="pine">Pineapple</label>
                <input 
                onChange={e => {changer(e)}} 
                type="checkbox" name="pine" />
                <label htmlFor="olive">Olive</label>
                <input 
                onChange={e => {changer(e)}} type="checkbox"
                 name="olive" />
                <label htmlFor="sardines">Sardines</label>
                <input 
                 onChange={e => {changer(e)}} 
                 type="checkbox" name="sardines" />
                <label htmlFor="order">Order Now</label>
                
                
                    
                    <Fbtn id={order}theOrder={order} handleSubmite={handleSubmite}/>
                    
                
               
            </form>
           
        </div>
    );
}

export default Form;