import axios from 'axios'
const url =  'http://127.0.0.1:5000/auth'

export const register = async (email, firstName, password, confirmPassword) => {
  try {
    const response = await axios.post(`${url}/sign-up`, {
      email,
      firstName,
      password,
      confirmPassword
    });

    const { token, user_id, message } = response.data;
    

    // Store token and user_id in session data
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('userId', user_id);

    return { message };
  } catch (error) {
    throw error.response.data;
  }
};