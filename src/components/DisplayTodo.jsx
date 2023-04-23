import React, { useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
// import { data } from "./Interface";

function DisplayTodo({
  displayInputTodo,
  inputCheck,
  inputIsChange,
  clickDelete,
}) {
  return (
    <>
      <section className="display-section">
        {displayInputTodo.map((each, i) => {
          return (
            <div className="each-todo-con" key={i}>
              <input
                type="checkbox"
                // checked={inputCheck}
                // onChange={inputIsChange}
              />
              <div className="todo-name-and-time-con">
                <p>{each.title}</p>
                <p>{each.timeDate}</p>
              </div>
              <div className="delete-and-edit-con">
                <FaTrash
                  className="delete"
                  onClick={() => clickDelete(each.id)}
                />
                <FaEdit className="edit" />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default DisplayTodo;
