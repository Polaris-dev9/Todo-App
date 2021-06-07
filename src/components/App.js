import React, { useState } from "react";
import "./App.scss";

// Importing the components
import Header from "./Header";
import AddButton from "./AddButton";
import ListContainer from "./ListContainer";
import Footer from "./Footer";
const App = () => {
  const [taskObjs, setTaskObjs] = useState([]);
  const updateTaskObj = (datas) => {
    setTaskObjs([...taskObjs, datas]);
  };
  console.log(taskObjs);
  return (
    <>
      <div className="app">
        <div className="app__flex">
          <header className="header">
            <Header />
          </header>
          <section className="middle">
            <AddButton updateTaskObj={updateTaskObj} />
            <ListContainer taskObjs={taskObjs} />
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
