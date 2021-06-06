import React from "react";
import ListItem from "./ListItem";

// Importing the UUID
import { v4 as uuidv4 } from "uuid";

const ListContainer = ({ taskObjs }) => {
  const taskObjEls = taskObjs.map((taskObj) => {
    return <ListItem taskObj={taskObj} key={uuidv4()} id={uuidv4()} />;
  });
  return <div className="container-750">{taskObjEls}</div>;
};

export default ListContainer;
