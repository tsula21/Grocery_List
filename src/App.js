import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [arr, setArr] = useState([]);
  const [itemId, setItemId] = useState(null);
  const [popUp, setPopUp] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (!inputValue) {
      showPopUp(true, "Please Enter Value", "danger");
    } else if (inputValue && isEditing) {
      setArr(
        arr.map((item) => {
          if (item.id === itemId) {
            return { ...item, task: inputValue };
          }
          return item;
        })
      );
      // showPopUp(true, "Value Changed", "success");
    } else {
      setArr([
        ...arr,
        {
          id: Math.floor(Math.random() * 100000),
          complete: false,
          task: inputValue,
        },
      ]);
      showPopUp(true, "Item Added To The List", "success");
    }
    setInputValue("");
    console.log("submited");
  };

  const showPopUp = (show = false, msg = "", type = "") => {
    setPopUp({ show, msg, type });
  };

  const removeHandler = (id) => {
    const filteredArr = arr.filter((item) => item.id !== id);
    showPopUp(true, "Item Removed", "danger");
    return setArr(filteredArr);
  };

  const clearAll = () => {
    setArr([]);
    showPopUp(true, "Empty List", "danger");
  };

  const editHandler = (id) => {
    const specificItem = arr.find((item) => item.id === id);
    console.log(specificItem, "koko");
    setIsEditing(true);
    setItemId(id);
    console.log(itemId);
    setInputValue(specificItem.task);
  };

  return (
    <>
      <header>
        <h2>Grocery List</h2>
      </header>
      <section className="section-center">
        <header>
          {popUp.show && <Alert {...popUp} removePopUp={showPopUp} />}
          <h3 className="inside">Grocery List</h3>
        </header>
        <form className="grocery-form" onSubmit={submitHandle}>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g. eggs"
              value={inputValue}
              onChange={handleChange}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
        </form>
        <div className="grocery-container">
          <List
            arr={arr}
            removeHandler={removeHandler}
            editHandler={editHandler}
          />
        </div>
        <h4
          className="sum"
          style={arr.length <= 0 ? { display: "none" } : { display: "block" }}
        >
          Quantity: {arr.length}
        </h4>
        <button
          className="clear-btn"
          style={arr.length <= 0 ? { display: "none" } : { display: "block" }}
          onClick={clearAll}
        >
          Clear All
        </button>
      </section>
    </>
  );
}

export default App;
