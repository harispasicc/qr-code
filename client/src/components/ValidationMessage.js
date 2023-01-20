import React from "react";

function ValidationMessage({ title }) {
  return (
    <div className="alert alert-success" role="alert">
      <h4 className="delete-success">The QR Code</h4>
      <h3 className="delete-success">{title}</h3>
      <p className="delete-success">was deleted successfully!</p>
    </div>
  );
}
export default ValidationMessage;
