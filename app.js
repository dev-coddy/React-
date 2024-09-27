import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Namaste React🚀"),
    React.createElement("h2", {}, "I am an h2 element"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Talent"),
    React.createElement("h2", {}, "I am an h2 element"),
  ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);