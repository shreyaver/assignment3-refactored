import Axios from 'axios';

const getRequest = url => Axios.get(url, {
  headers: {
    'Content-type': 'application/json',
  },
});

export default getRequest;
