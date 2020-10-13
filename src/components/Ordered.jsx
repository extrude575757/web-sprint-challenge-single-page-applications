
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'



const Ordered = (props) => {
    const [oh,setOh] = useState([]);
    const {order} = props;
    useState( () =>{
        setOh(order);
        console.log(order)
    }, [])
    return (
        <div>
            Ordered Sir{oh.name}
        </div>
    );


};

export default Ordered;