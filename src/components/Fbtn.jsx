import React from 'react'
import '../App.css';
import { Router, Link, useRouteMatch, useHistory, useParams } from 'react-router-dom'
// import React, from 'react'
import data from '../data';
const Fbtn = (props) =>{
    const {theOrder}  = props;
    const { order } = useParams();
    const history = useHistory();
    const { url, path } = useRouteMatch();
    const clickIt = () =>{
        // history.push(`/thankyou/:order`);
        history.push(`/thankyou/${theOrder}`);
        // location.reload();
        console.log('clicked')
        console.log(order);
        console.log(theOrder);
    }


//     const clickIt = () =>{
//         history.pushState('/pizza/' + url)
// location.reload()
//     }

    return (
        
                    
        
        
        
            <div>
            <Link to={`/thankyou/${theOrder}`} >
            <button key={theOrder.id}onClick={clickIt} name="order">Add 2 Order</button>
            </Link>
        </div>
        
    );
};

export default Fbtn;