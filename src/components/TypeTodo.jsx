import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
// import AllandOthers from "./AllandOthers";

function TypeTodo({
  removePopUp,
  drop,
  openDropdown,
  titleInput,
  titleValue,
  addTask,
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
                onChange={titleValue}
              />
            </div>
            <div className="status-con">
              <p>Status</p>
              <section className="status-dropdown-sect">
                <div className="status-incomp-con" onClick={openDropdown}>
                  <p>Incomplete</p>
                  <FaAngleDown />
                </div>
                {drop && (
                  <div className="dropdown-content">
                    <p>Incomplete</p>
                    <p>Complete</p>
                  </div>
                )}
              </section>
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
