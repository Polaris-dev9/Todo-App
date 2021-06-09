import React, { useState } from "react";

const Edit = (props) => {
  const { editableObj } = props;
  const { title, desc } = editableObj;
  const [title1, setTitle1] = useState(title);
  const [desc1, setDesc1] = useState(desc);
  return (
    <>
      <div className="container-750">
        <form>
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
