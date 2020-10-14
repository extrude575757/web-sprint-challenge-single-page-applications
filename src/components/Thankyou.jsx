import React from "react"
import {useParams, useHistory, useRouteMatch} from 'react-router-dom';

const  Thankyou = (props) => {
    const {order}  = useParams();
const {orders} = props;
const gr = (o)=>{
    console.log(o);
    return o;
};

    
    return (
        <div>
            {orders}Thank you comeagain {order}
        </div>
    );
};
export default Thankyou;