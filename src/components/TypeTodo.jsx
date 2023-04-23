import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
// import AllandOthers from "./AllandOthers";

function TypeTodo({
  removePopUp,
  titleInput,
  titleValue,
  addTask,
  incomp,
  comp,
  handledropdown,
}) {
  return (
    <>
      <div className="overlay-con">
        <section className="times-icon-type-sect">
          <FaTimes className="times" onClick={removePopUp} />
          <div className="type-todo-con">
            <h2>Add Todo</h2>
            <div className="title-con">
              <p>Title</p>
              <input
                type="text"
                name="title"
                value={titleInput}
                onChange={(e) => titleValue(e)}
              />
            </div>
            <div className="status-con">
              <p>Status</p>
              <select name="opt" id="" onChange={handledropdown}>
                <option value=""></option>
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </div>
            {/* Add Task and Cancel buttons */}
            <button className="task-btn" onClick={addTask}>
              Add Task
            </button>
            <button className="cancel-btn" onClick={removePopUp}>
              Cancel
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default TypeTodo;
