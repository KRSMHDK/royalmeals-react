import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/recipes';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(`${baseUrl}/add`, newObject);
  return request.then((response) => response.data);
};

const getById = async (id) => {
  try {
    const request = axios.get(`${baseUrl}/${id}`);
    return request.then((response) => response.data);
  } catch (err) {
    console.error(ErrorEvent);
  }
};

const recipes = {
  getAll: getAll,
  create: create,
  getById: getById,
};

export default recipes;
