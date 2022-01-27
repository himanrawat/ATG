import React from "react";
import PreLogin from "./Component/Nav/PreLogin";
import Header from "./Component/Header/Header";
import Content from "./Component/Content/Content";
import "./index.css";

const App = () => {
  return (
    <>
      <PreLogin />
      <Header />
      <Content />
    </>
  );
};

export default App;
