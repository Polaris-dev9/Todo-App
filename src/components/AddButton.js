import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddButton = (props) => {
  const { updateTaskObj } = props;
  const addedObj = {};
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const addObj = (e) => {
    e.preventDefault();
    addedObj.title = title;
    addedObj.desc = desc;
    addedObj.id = uuidv4();
    setTitle("");
    setDesc("");
    updateTaskObj(addedObj);
  };
  return (
    <div className="container-750">
      <form onSubmit={addObj}>
        <div className="form__container">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            value={desc}
          />
        </div>
        <button className="btn-primary">+ Add the Task.</button>
      </form>
    </div>
  );
};

export default AddButton;
