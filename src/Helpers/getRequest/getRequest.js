import Axios from 'axios';

const getRequest = async (url) => {
  const serverResponse = await Axios.get(url);
  return serverResponse.data;
};

export default getRequest;
