
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 element"),
    React.createElement("h2", {}, "I am an h2 element"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 element"),
    React.createElement("h2", {}, "I am an h2 element"),
  ])
]);

root.render(parent);