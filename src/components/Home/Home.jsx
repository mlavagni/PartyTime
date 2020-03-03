import React from "react";

function Home(props) {
  return (
    <div>
      <h1>Ready to Party!!!</h1>
      {/* <h1>{props.user.name != null ? props.user.name : "Log In to start"}</h1> */}

      <div>
        <img src="/background2.png" alt="background img" />
      </div>
    </div>
  );
}

export default Home;
