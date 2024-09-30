import React from "react";
import ReactDOM from "react-dom/client";

// React Functional Component
const Title = () => (
  <h1 className="heading" tabIndex="4">
    Namaste React using JSX🚀
  </h1>
);

const HeadingComponent = () => (
  <div className="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1>Hello React Fucntional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
