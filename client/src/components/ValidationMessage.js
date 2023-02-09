import React from "react";

function ValidationMessage({ title, setValidation }) {
  return (
    <div className="alert alert-success" role="alert">
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={() => {
          setValidation(false);
        }}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 className="delete-success">The QR Code</h4>
      <h3 className="delete-success">{title}</h3>
      <p className="delete-success">was deleted successfully!</p>
    </div>
  );
}
export default ValidationMessage;
