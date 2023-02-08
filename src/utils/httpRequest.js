import axios from 'axios';

console.log(process.env);

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// custom method get để rút gọn res.data.data
export const get = async (path, options = {}) => {
  const response = await httpRequest.get(path, options);
  return response.data;
};
export default httpRequest;
