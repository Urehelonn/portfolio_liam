import axios from 'axios';

const AUTH_REGISTER_URL = `${process.env.API_URL}register`;
const AUTH_LOGIN_URL = `${process.env.API_URL}login`;

export type LogInReq = {
  username: string;
  password: string;
};

const register = async (data: LogInReq) => {
  try {
    return await axios.post(AUTH_REGISTER_URL, {
      email: data.username,
      password: data.password,
    });
  } catch (e) {
    console.log(e);
  }
};

const login = async (data: LogInReq) => {
  try {
    const response = await axios.post(AUTH_LOGIN_URL, {
      email: data.username,
      password: data.password,
    });
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (e) {
    console.log(e);
  }
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
