import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
// import { data } from "./Interface";

function DisplayTodo({ displayInputTodo }) {
  return (
    <>
      <section className="display-section">
        {displayInputTodo.map((each, i) => {
          return (
            <div className="each-todo-con" key={i}>
              <input type="checkbox" />
              <div className="todo-name-and-time-con">
                <p>{each.title}</p>
                <p>{each.timeDate}</p>
              </div>
              <div className="delete-and-edit-con">
                <FaTrash className="delete" />
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
