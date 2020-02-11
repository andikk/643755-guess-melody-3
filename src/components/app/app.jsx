import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";


const welcomeButtonHandler = () => {};

const App = (props) => {
  const {errors, questions} = props;

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errors={errors} onWelcomeButtonClick={welcomeButtonHandler}/>
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen question={questions[1]} />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errors: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
