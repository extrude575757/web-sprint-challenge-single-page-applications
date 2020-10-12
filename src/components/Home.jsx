import React from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
  console.log(props);

  // history from Hook is the same as props.history.
  // You may use either, but you must use the hook when you don't have access to the react router props.
  const history = useHistory();
  console.log(history);
  const routeToShop = () => {
    history.push("/pizza");
  };
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://picsum.photos/200/300"
        alt=""
      />
      <button className="md-button shop-button" onClick={routeToShop}>
        EET - NOW!
      </button>
    </div>
  );
}

export default Home;
