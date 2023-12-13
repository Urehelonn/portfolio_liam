import axios from 'axios';

const AUTH_REGISTER_URL = `${process.env.API_URL}user/register`;
const AUTH_LOGIN_URL = `${process.env.API_URL}user/login`;

export type LogInReq = {
  username: string;
  password: string;
};

const register = async (data: LogInReq) => {
  return await axios.post(AUTH_REGISTER_URL, {
    username: data.username,
    password: data.password,
  });
};

const login = async (data: LogInReq) => {
  const response = await axios.post(AUTH_LOGIN_URL, {
    username: data.username,
    password: data.password,
  });
  if (response.data.sessionId) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  // TODO: logout flow adding to remove existed session
  localStorage.removeItem('user');
};

const authApi = {
  register,
  login,
  logout,
};

export default authApi;
