import React from "react"

function Thankyou(props) {
const {name} = props.name;
    console.log(props);
    return (
        <div>
            Thank you comeagain {name}
        </div>
    );
};
export default Thankyou;