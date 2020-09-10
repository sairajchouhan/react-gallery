import React from 'react';
import '../css/Main.css';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Main = () => {
  const [{ results }, dispatch] = useStateValue();
  return (
    <div className="main">
      <nav className="main__navbar">
        <ul>
          <li>
            <Link to="/search-results" className="main__navbarLink">
              search results
            </Link>
          </li>
          <li>
            <ArrowForwardIosIcon />
          </li>
          <li>
            <Link to={`/${results[0]?.title}`} className="main__navbarLink">
              {results[0]?.title}
            </Link>
          </li>
          <li>
            <Link to={`/${results[1]?.title}`} className="main__navbarLink">
              {results[1]?.title}
            </Link>
          </li>
          <li>
            <Link to={`/${results[2]?.title}`} className="main__navbarLink">
              {results[2]?.title}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main__content">
        {results.length > 0 ? (
          <p>Select any collection above</p>
        ) : (
          <p>Your result goes here</p>
        )}
      </div>
    </div>
  );
};

export default Main;
