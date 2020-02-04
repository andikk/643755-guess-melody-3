import React from "react";

const WelcomeScreen = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errors = 0} = props;

  return (
    <p>Количество ошибок: {errors}</p>
  );
};

export default WelcomeScreen;
