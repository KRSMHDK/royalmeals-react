import axios from 'axios';
const baseUrl = 'http://localhost:3001';

const register = (newObject) => {
  const request = axios.post(`${baseUrl}/register`, newObject);
  return request.then((response) => response.data);
};

const login = (newObject) => {
  const request = axios
    .post(`${baseUrl}/login`, newObject, {
      withCredentials: true,
    })
    .then((res) => {
      if (res.data === 'success') {
        window.location.href = '/';
      }
    });
  return request.then((response) => console.log(response.data));
};

const getAllUsers = async () => {
  const res = await axios.get(`${baseUrl}/getallusers`, {
    withCredentials: true,
  });
  return res.data;
};

const getUser = async () => {
  const res = await axios.get(`${baseUrl}/user`, { withCredentials: true });
  return res.data;
};

const logout = async () => {
  const res = await axios
    .get(`${baseUrl}/logout`, { withCredentials: true })
    .then((res) => {
      if (res.data === 'success') {
        window.location.href = '/';
      }
    });
  return res.data;
};

const users = {
  register: register,
  login: login,
  logout: logout,
  getUser: getUser,
  getAllUsers: getAllUsers,
};

export default users;
