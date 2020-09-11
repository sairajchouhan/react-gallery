import React, { useEffect } from 'react';
import '../css/Main.css';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

const Main = ({ match }) => {
  const [{ results }, dispatch] = useStateValue();
  let random = Math.ceil(Math.random() * 100);
  async function fetchData() {
    const res = await unsplash.get('/collections', {
      params: { page: random, per_page: 5 },
    });
    dispatch({ type: 'ADD_DATA', payload: res.data });
  }

  useEffect(() => {
    fetchData();
  }, []);

  let activeClass = 'main__navbarLink main__navLink-active';

  console.log(match);

  return (
    <div className="main">
      <nav className="main__navbar">
        <ul>
          <Link
            className="main__navbarLink"
            to="/search-results"
            onClick={() => {
              fetchData();
              dispatch({ type: 'EMPTY_IMAGES' });
            }}
          >
            <li>Random collections</li>
          </Link>
          <li>
            <ArrowForwardIosIcon />
          </li>
          {results.map((result) => (
            <Link
              to={`/collections/${result?.id}`}
              className={
                parseInt(match?.params.id) === result?.id
                  ? activeClass
                  : 'main__navbarLink'
              }
              onClick={console.log(parseInt(match?.params.id) === result?.id)}
            >
              <li> {result.title} </li>{' '}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="main__content">
        <ImageList id={match?.params.id} />
      </div>
    </div>
  );
};

export default Main;
