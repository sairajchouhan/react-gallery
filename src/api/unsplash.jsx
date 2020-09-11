import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID nLXk9NaySNT26-BmrnuWfrJ_kwgKocDu_EfSlqjURgM',
  },
});
