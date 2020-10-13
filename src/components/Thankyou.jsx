import React from "react"

function Thankyou(props) {
const {order} = props.name;

    console.log(props);
    return (
        <div>
            Thank you comeagain {order}
        </div>
    );
};
export default Thankyou;