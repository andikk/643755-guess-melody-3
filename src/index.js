import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  ERRORS: 3
};

ReactDOM.render(
    <App errors={Settings.ERRORS}/>,
    document.getElementById(`root`)
);
