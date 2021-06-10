import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

// Importing the components
import Header from "./Header";
import AddButton from "./AddButton";
import Edit from "./Edit";
import ListContainer from "./ListContainer";
import Footer from "./Footer";
const App = () => {
  const [taskObjs, setTaskObjs] = useState([]);
  const [editableObj, setEditableObj] = useState({});
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

  //Using the local storage
  const _local_storage_key = "storage";
  useEffect(() => {
    const allDatas = JSON.parse(localStorage.getItem(_local_storage_key));
    setTaskObjs(allDatas);
  }, []);
  useEffect(() => {
    localStorage.setItem(_local_storage_key, JSON.stringify(taskObjs));
  }, [taskObjs]);

  return (
    <Router>
      <div className="app">
        <div className="app__flex">
          <header className="header">
            <Header />
          </header>
          <Switch>
            <Route path="/" exact>
              <div className="container-750">
                <AddButton updateTaskObj={updateTaskObj} />
                <ListContainer
                  taskObjs={taskObjs}
                  objAfterDeletion={objAfterDeletion}
                  objAfterEdit={objAfterEdit}
                />
              </div>
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
