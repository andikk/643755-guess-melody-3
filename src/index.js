import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import questions from "./mocks/questions.js";
import settings from "./mocks/settings";

ReactDOM.render(
    <App errors={settings.errors}
      questions={questions}/>,
    document.getElementById(`root`)
);
