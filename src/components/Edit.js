import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Edit = (props) => {
  //Using the useHistory to go back to the previous page.
  const history = useHistory();
  const { editableObj, finalObjAfterEdit } = props;
  const { title, desc, id } = editableObj;
  const [title1, setTitle1] = useState(title);
  const [desc1, setDesc1] = useState(desc);
  const editingFun = (e) => {
    e.preventDefault();
    if (title1 === "" || desc1 === "") return;
    // console.log("Done Editing!");
    history.goBack();
    const finalObj = { id: id, title: title1, desc: desc1 };
    // console.log(finalObj);
    finalObjAfterEdit(finalObj);
  };
  return (
    <>
      <div className="container-750">
        <form onSubmit={editingFun}>
          <div className="form__container">
            <input
              type="text"
              placeholder="Title"
              value={title1}
              onChange={(e) => {
                setTitle1(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Description"
              value={desc1}
              onChange={(e) => {
                setDesc1(e.target.value);
              }}
            />
          </div>
          <button className="btn-primary">Okey Done Editing!</button>
        </form>
      </div>
    </>
  );
};

export default Edit;
