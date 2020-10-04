import React from 'react';
import '../css/Landing.css';
// import unsplash from '../api/unsplash';
// import { useHistory } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';

const Landing = () => {
  const [{ results }] = useStateValue();

  console.log(results);

  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__title">
          Image Gallery using Unsplash API
        </div>
        <div className="landing__subtitle">
          Gets some random collections 
        </div>
      </div>
    </div>
  );
};

export default Landing;
