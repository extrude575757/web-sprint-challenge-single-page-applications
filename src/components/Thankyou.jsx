import React from "react"
import {useParams, useHistory, useRouteMatch} from 'react-router-dom';

const  Thankyou = props => {
    const {order}  = useParams();
const {orders} = props;
    if(props != null){
        console.log(orders);
        console.log(order);
    }

    
    return (
        <div>
            Thank you comeagain {order.name}
        </div>
    );
};
export default Thankyou;