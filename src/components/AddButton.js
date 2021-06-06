import React from "react";

const AddButton = () => {
  const addObj = () => {
    console.log("Object Added");
  };
  return (
    <div className="container-750">
      <form>
        <button className="btn-primary" onClick={addObj}>
          + Add the Task.
        </button>
      </form>
    </div>
  );
};

export default AddButton;
