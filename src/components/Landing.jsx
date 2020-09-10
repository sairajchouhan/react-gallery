import React, { useState } from 'react';
import '../css/Landing.css';
import SearchIcon from '@material-ui/icons/Search';
import unsplash from '../api/unsplash';

const Landing = () => {
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await unsplash.get('/search/collections', {
      params: { query: input },
    });
    console.log(response.data);
  };

  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__title">
          Internship Task by &copy; Bipolar Factory
        </div>
        <div className="landing__subtitle">search for collections</div>
        <div className="landing__inputContainer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="landing__input"
              placeholder="Search for collections"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <SearchIcon className="landing__searchIcon" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;
