import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ arr, removeHandler, editHandler }) => {
  return (
    <>
      {arr.map((item, index) => {
        return (
          <article key={item.id} className="grocery-item">
            <p className="title">{item.task}</p>
            {/* <h4>{item.task}</h4> */}
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editHandler(item.id)}
              >
                <FaEdit></FaEdit>
              </button>
              <button
                onClick={() => removeHandler(item.id)}
                type="button"
                className="edit-btn"
              >
                <FaTrash></FaTrash>
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
