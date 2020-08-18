import React from 'react';

function AddButton({ onClick }) {
  return (
    <div className="buttonContainer">
      <button className="addComponentBtn" onClick={onClick}>Add Clicker</button>
    </div>
  );
}

export { AddButton };
