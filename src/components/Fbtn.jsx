import React, { useState } from 'react'
import '../App.css';
import Ordered from './Ordered';
import data from '../data';
import { Router, Link, Route, useRouteMatch, useHistory, useParams } from 'react-router-dom'
// import React, from 'react'
// import data from '../data';
const Fbtn = (props) =>{
    const {theOrder}  = props;
    const [ord,setOrd] = useState([]);
    const { order } = useParams();
    const history = useHistory();
    const { url, path } = useRouteMatch();
    const clickIt = (ev) =>{
        setOrd(theOrder);
        // history.push(`/thankyou/:order`);
        history.push(`/thankyou/:order`);
        data.push(ord.theOrder)
        // location.reload();
        //  props.handleSubmite(ev,ord);
        // props.handleSubmite();
        
        console.log('clicked')
        console.log(props);
        console.log(ord);
        // return theOrder;
    }


//     const clickIt = () =>{
//         history.pushState('/pizza/' + url)
// location.reload()
//     }

    return (
        
                    
        
        
        
            <div>
            <Link to={`/thankyou/:order`} >
            <button key={ord.id}onClick={e =>clickIt(e)} name="order">Add 2 Order</button>
            </Link>
            
        </div>
        
    );
};

export default Fbtn;