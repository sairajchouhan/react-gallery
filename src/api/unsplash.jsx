import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID uaD7C5yFMPkzUlVWHdU8JWKBhPYFNcuClIuven1ztzM',
  },
});
