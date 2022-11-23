import axios from './axios';

const login = async (formData) => {
  return await axios.post('/api/users/login', formData);
};

const register = async (formData) => {
  return await axios.post('/api/users/register', formData);
};

const authService = {
  login,
  register,
};

export default authService;
