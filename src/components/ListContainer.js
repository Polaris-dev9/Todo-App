import React from "react";
import ListItem from "./ListItem";

// Importing the UUID
// import { v4 as uuidv4 } from "uuid";

const ListContainer = ({
  taskObjs,
  updateTaskObj,
  objAfterDeletion,
  objAfterEdit,
}) => {
  const taskObjEls = taskObjs.map((taskObj) => {
    return (
      <ListItem
        taskObj={taskObj}
        key={taskObj.id}
        updateTaskObj={updateTaskObj}
        objAfterDeletion={objAfterDeletion}
        objAfterEdit={objAfterEdit}
      />
    );
  });
  return <div className="container-750">{taskObjEls}</div>;
};

export default ListContainer;
