import axios from 'axios';

const request = axios.create({
  baseURL: `https://tiktok.fullstack.edu.vn/api/`,
});

// custom method get để rút gọn res.data.data
export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};
export default request;
