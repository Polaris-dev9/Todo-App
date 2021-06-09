import React, { useState } from "react";

const Edit = (props) => {
  const { editableObj } = props;
  console.log(editableObj);
  return (
    <>
      <div className="container-750">
        <form>
          <div className="form__container">
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Description" />
          </div>
          <button className="btn-primary">+ Edit the Task.</button>
        </form>
      </div>
    </>
  );
};

export default Edit;
