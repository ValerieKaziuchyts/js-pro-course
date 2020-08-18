import React from 'react';
import { Clicker } from './Clicker.jsx';

function Clickers({ clickersArray }) {
  const clickersToRender = clickersArray.map((clicker) => <Clicker key={clicker.id} />);

  return (
    <div className="clickerContainer">
      {clickersToRender}
    </div>
  );
}

export { Clickers };
