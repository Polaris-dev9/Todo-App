import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { v4 as uuidv4 } from "uuid";

// Importing the components
import Header from "./Header";
import AddButton from "./AddButton";
import Edit from "./Edit";
import ListContainer from "./ListContainer";
import Footer from "./Footer";
const App = () => {
  const [editableObj, setEditableObj] = useState({});
  const [taskObjs, setTaskObjs] = useState([
    {
      id: uuidv4(),
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

  const objAfterEdit = (dataID) => {
    const newTaskObjs = taskObjs.filter((taskObj) => {
      return taskObj.id !== dataID;
    });
    let _random = taskObjs.find((taskObj) => {
      return taskObj.id === dataID;
    });
    setEditableObj(_random);
  };

  return (
    <Router>
      <div className="app">
        <div className="app__flex">
          <header className="header">
            <Header />
          </header>
          <Switch>
            <Route path="/" exact>
              <section className="middle">
                <AddButton updateTaskObj={updateTaskObj} />
                <ListContainer
                  taskObjs={taskObjs}
                  objAfterDeletion={objAfterDeletion}
                  objAfterEdit={objAfterEdit}
                />
              </section>
            </Route>
            <Route path="/edit">
              <Edit editableObj={editableObj} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
