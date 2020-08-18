import React from 'react';

function Home() {
  return (
    <div className="homePage">
      <div className="textArea">
        <img className="helloMessage" src="./assets/img/Hello message.png" alt="Hello message" />
        <div className="lightAndBoldText">
          <span className="lightText">I&apos;m </span>
          <span className="boldText">Valerie</span>
        </div>
        <span className="phrase">A junior front-end developer :)</span>
      </div>
      <img className="vector2" src="./assets/img/Vector 2.png" />
      <img className="vector1" src="./assets/img/Vector 1.png" />
      <img className="girlImg" src="./assets/img/Girl.png" />
    </div>
  );
}

export { Home };
