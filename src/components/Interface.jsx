import React, { useEffect, useState } from "react";
import DisplayTodo from "./DisplayTodo";
import TypeTodo from "./TypeTodo";
import { FaAngleDown } from "react-icons/fa";

const data = {
  title: "",
  timeDate: "",
};

function Interface() {
  const currentDate = new Date();
  const timeAndDate = currentDate.toLocaleString();
  const [allList, setAllList] = useState(false); //To toggle the 'All' dropdown
  const [addTask, setAddTask] = useState(false); // To toggle 'Add Task' popup
  const [dropdown, setDropdown] = useState(false); // Popup dropdown
  const [displayTitle, setDisplayTitle] = useState("");
  const [timeDate, setTimeDate] = useState("");
  const [objTodo, setObjTodo] = useState(data);
  const [pushToArr, setPushToArr] = useState([]);

  const showAllList = () => {
    setAllList(!allList);
  };

  const popUpTask = () => {
    setAddTask(true);
  };

  const changleValue = (e) => {
    setDisplayTitle(e.target.value);
    setObjTodo({
      ...objTodo,
      title: displayTitle,
      timeDate: timeDate,
    });
  };

  const handleAddTask = () => {
    // setTimeDate(timeAndDate);
    if (displayTitle) {
      setPushToArr([...pushToArr, objTodo]);
      setAddTask(false);
      setDisplayTitle("");
    } else {
      console.log("Title cannot be empty");
    }
  };

  useEffect(() => {
    setTimeDate(timeAndDate);
    console.log(objTodo);
    console.log(pushToArr);
  }, [pushToArr]);

  return (
    <>
      <main>
        <h1>TODO LIST</h1>
        <div className="add-task-all-con">
          <button className="add-task-btn" onClick={popUpTask}>
            Add Task
          </button>
          <div className="dropdown-con" onClick={showAllList}>
            <p>All</p>
            <FaAngleDown />
            {allList && (
              <div className="view-content-con">
                <p>All</p>
                <p>Incomplete</p>
                <p>Complete</p>
              </div>
            )}
          </div>
        </div>
        <DisplayTodo displayInputTodo={pushToArr} />
        {addTask && (
          <TypeTodo
            drop={dropdown}
            openDropdown={() => setDropdown(!dropdown)}
            removePopUp={() => setAddTask(false)}
            titleInput={displayTitle}
            titleValue={changleValue}
            addTask={handleAddTask}
          />
        )}
      </main>
    </>
  );
}

export default Interface;
