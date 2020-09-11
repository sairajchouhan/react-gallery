import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID o3_DLH609VLMVYG5UZW_MX3j3iWEK53cN-oivXtAu0k',
  },
});
