import axios from 'axios';

const API_URL = process.env.EXPO_PUBLIC_API_URL;



export const SignUpUserAPI = async (userData: any) => {

  

  try {
    const response = await axios.post(`${API_URL}/auth/signup`, userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error', error);
      throw new Error(error.response?.data?.message || 'Signup failed');
    }
    throw error;
  }
};