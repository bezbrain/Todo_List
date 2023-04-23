import React, { useEffect, useState, useRef } from "react";
import DisplayTodo from "./DisplayTodo";
import TypeTodo from "./TypeTodo";
import { FaAngleDown } from "react-icons/fa";

function Interface() {
  const data = {
    id: "",
    title: "",
    timeDate: new Date().toLocaleString(),
    opt: "",
  };

  const [addTask, setAddTask] = useState(false); // To toggle 'Add Task' popup
  const [objTodo, setObjTodo] = useState(data);
  const [pushToArr, setPushToArr] = useState(
    JSON.parse(localStorage.getItem("todoArr")) || []
  );
  const [selectDropdown, setSelectedDropdown] = useState("");
  const [check, setCheck] = useState(false);
  // const [checkIndex, setCheckIndex] = useState(null);
  const { title, timeDate, opt } = objTodo;

  /*========*/
  // Click to show popup
  const popUpTask = () => {
    setAddTask(true);
  };

  /*========*/
  // Collect the value of title input
  const changeValue = (e) => {
    setObjTodo({
      ...objTodo,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
  };

  /*========*/
  // Click to add the Task
  const handleAddTask = (index) => {
    if (!title) {
      console.log("Title cannot be empty"); // Error code
      return;
    }
    if (opt === "") {
      console.log("Select an option"); // Error code
      return;
    }
    setPushToArr([...pushToArr, objTodo]);
    setAddTask(false);
    setObjTodo(data);
    setSelectedDropdown("");
    console.log(objTodo);
    if (opt === "incomplete") {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };

  /*========*/
  // Change the popup dropdown
  const handleStatusDropdown = (e) => {
    setSelectedDropdown(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("todoArr", JSON.stringify(pushToArr)); //Send to local Storage
  }, [pushToArr]);

  useEffect(() => {
    setObjTodo({
      ...objTodo,
      opt: selectDropdown,
    });
  }, [selectDropdown]);

  /*========*/
  // Delete Todo
  const handleDelete = (count) => {
    const newPushToArr = pushToArr.filter((each) => {
      return each.id !== count;
    });
    setPushToArr(newPushToArr);
  };

  return (
    <>
      <main>
        <h1>TODO LIST</h1>
        <div className="add-task-all-con">
          <button className="add-task-btn" onClick={popUpTask}>
            Add Task
          </button>
          <select name="" id="">
            <option value="">All</option>
            <option value="">Incomplete</option>
            <option value="">Complete</option>
          </select>
        </div>
        <DisplayTodo
          displayInputTodo={pushToArr}
          clickDelete={handleDelete} /*inputCheck={check}*/
        />
        {addTask && (
          <TypeTodo
            removePopUp={() => setAddTask(false)}
            titleInput={title}
            titleValue={changeValue}
            addTask={handleAddTask}
            handledropdown={handleStatusDropdown}
          />
        )}
      </main>
    </>
  );
}

export default Interface;
