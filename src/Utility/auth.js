import { setCookie, destroyCookie } from 'next-cookies';
import axios from './axiosInstance';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    setCookie(null, 'token', token, { path: '/' });
  } else {
    delete axios.defaults.headers.common.Authorization;
    destroyCookie(null, 'token', { path: '/' });
  }
};

const handleTokenExpiration = () => {
  setAuthToken(null);
  if (typeof window === 'undefined') {
    // Server-side redirect
    const url = `${process.env.BASE_URL}/login`;
    const { res } = error.response.config;
    res.writeHead(302, { Location: url });
    res.end();
  } else {
    // Client-side redirect
    Router.push('/login');
  }
};

const refreshToken = async () => {
  try {
    const { data } = await axios.post('/refresh-token');
    const { token } = data;
    setAuthToken(token);
    return token;
  } catch (error) {
    handleTokenExpiration(error);
    return null;
  }
};

export { setAuthToken, handleTokenExpiration, refreshToken };