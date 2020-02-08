import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

const welcomeButtonHandler = () => {};

const App = (props) => {
  const {errors} = props;

  return (
    <WelcomeScreen errors={errors} onWelcomeButtonClick={welcomeButtonHandler}/>
  );
};

App.propTypes = {
  errors: PropTypes.number.isRequired,
};

export default App;
