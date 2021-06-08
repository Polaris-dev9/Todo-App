import React, { useState } from "react";
import "./App.scss";

// Importing the components
import Header from "./Header";
import AddButton from "./AddButton";
import ListContainer from "./ListContainer";
import Footer from "./Footer";
const App = () => {
  const [taskObjs, setTaskObjs] = useState([
    {
      title: "Robotics Task",
      desc: "Creating the schemantic diagram using 555 Timer IC.",
    },
  ]);
  const updateTaskObj = (datas) => {
    setTaskObjs([...taskObjs, datas]);
  };
  console.log(taskObjs);

  const objAfterDeletion = (dataID) => {
    const newTaskObjs = taskObjs.filter((taskObj) => {
      return taskObj.id !== dataID;
    });
    setTaskObjs(newTaskObjs);
  };
  return (
    <>
      <div className="app">
        <div className="app__flex">
          <header className="header">
            <Header />
          </header>
          <section className="middle">
            <AddButton updateTaskObj={updateTaskObj} />
            <ListContainer
              taskObjs={taskObjs}
              objAfterDeletion={objAfterDeletion}
            />
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
