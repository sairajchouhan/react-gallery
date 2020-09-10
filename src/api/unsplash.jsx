import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Kigh0vrt5epB3vvFsN8jPODcFLKklXVDQS8IprchnP0',
  },
});
