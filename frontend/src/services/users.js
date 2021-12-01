import axios from 'axios';
const baseUrl = 'http://localhost:3001';

const register = (newObject) => {
  const request = axios.post(`${baseUrl}/register`, newObject);
  return request.then((response) => response.data);
};

const users = {
  register: register,
};

export default users;
