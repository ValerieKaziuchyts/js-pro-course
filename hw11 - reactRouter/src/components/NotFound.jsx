import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function NotFound() {
  const [redirect, setRedirect] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const time = setTimeout(() => { if (timer > 0) { setTimer(timer - 1); } }, 1000);
    const timeout = setTimeout(() => { if (timer === 0) { setRedirect(true); } }, 0);

    return () => {
      clearTimeout(timeout);
      clearTimeout(time);
    };
  });

  return (

    <div className="notFoundPage">
      <span className="notFoundBoldText">404</span>
      <img className="seoImg" src="./assets/img/seo_monochromatic.png" />
      <span className="notFoundLightText">The page you are looking for is not found :(</span>
      <span className="notFoundHome">
        Return to Home page in
        <span className="greenNumbers">
          {' '}
          {timer}
        </span>
        .
      </span>
      {redirect ? <Redirect to="/" /> : null}
    </div>
  );
}

export { NotFound };
