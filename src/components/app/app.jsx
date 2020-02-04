import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  const {errors} = props;

  return (
    <WelcomeScreen errors={errors}/>
  );
};

export default App;
