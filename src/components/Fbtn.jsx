import React, { useState } from 'react'
import '../App.css';
import Ordered from './Ordered';
import data from '../data';
import { Router, Link, Route, useRouteMatch, useHistory, useParams } from 'react-router-dom'
// import React, from 'react'
// import data from '../data';
const Fbtn = (props) =>{
    const {theOrder}  = props;
    const [ord,setOrd] = useState([{}]);
    const { order } = useParams();
    const history = useHistory();
    const { url, path } = useRouteMatch();
    const clickIt = (ev) =>{
        setOrd(theOrder);
        // history.push(`/thankyou/:order`);
        history.push(`/thankyou/?name=${theOrder.name}&Psize=${theOrder.Psize}
        &pep=${theOrder.pep}&pine=${theOrder.pine}&olive=${theOrder.olive}
        &sardines=${theOrder.sardines}
        `);
        // history.pushState('/thankyou/')
        // data.push(ord)
        // location.reload();
        
        // props.handleSubmite(ev,ord);
        
        console.log(history)
        console.log(ord);
        console.log(theOrder);
        props.handleSubmite(ev,ord);
        // return theOrder;
    }


//     const clickIt = () =>{
//         history.pushState('/pizza/' + url)
// location.reload()
//     }

    return (
        
                    
        
        
        
            <div>
            <Link to={`/thankyou`} >
            <button data-cy="submitit"  type="submit" onClick={e =>clickIt(e)} name="orderitnow">Add 2 Order</button>
            </Link>
            
        </div>
        
    );
};

export default Fbtn;