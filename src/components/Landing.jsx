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
          Internship Task by &copy; Bipolar Factory
        </div>
        <div className="landing__subtitle">
          Image Gallery using Unsplash API
        </div>
      </div>
    </div>
  );
};

export default Landing;
