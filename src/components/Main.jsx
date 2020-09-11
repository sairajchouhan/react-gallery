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

  return (
    <div className="main">
      <nav className="main__navbar">
        <ul>
          <Link
            className="main__navbarLink"
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
              className="main__navbarLink"
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
