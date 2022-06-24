import React, { useEffect } from "react";

const Alert = ({ type, msg, removePopUp }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removePopUp();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
