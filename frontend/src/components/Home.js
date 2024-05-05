import React from "react";
import Navbar from "./Navbar";
import BodyHeader from "./Body";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <BodyHeader />
      </>
    );
  }
}

export default Home;
