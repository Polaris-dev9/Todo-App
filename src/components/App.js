import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

// Importing the components
import Header from "./Header";
import AddButton from "./AddButton";
import Edit from "./Edit";
import ListContainer from "./ListContainer";
import Footer from "./Footer";
const App = () => {
  const [editableObj, setEditableObj] = useState({});
  const [taskObjs, setTaskObjs] = useState([]);
  const updateTaskObj = (datas) => {
    setTaskObjs([...taskObjs, datas]);
  };

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
    setTaskObjs(newTaskObjs);
  };

  const finalObjAfterEdit = (finalObj) => {
    setTaskObjs([...taskObjs, finalObj]);
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
              <Edit
                editableObj={editableObj}
                finalObjAfterEdit={finalObjAfterEdit}
              />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
