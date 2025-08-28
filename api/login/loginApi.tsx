import axios from 'axios';

const API_URL = process.env.EXPO_PUBLIC_API_URL
export interface LoginRequest {
  loginEmail: string;
  loginPassword: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  setProfileData: boolean
  userImage: string
 
}



export const LoginUserAPI = async (loginData: LoginRequest): Promise<LoginResponse> => {
  try {

console.log('API_URL', API_URL);
console.log('loginData', loginData);
    const response = await axios.post(`${API_URL}/auth/login`, loginData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error', error);
      throw new Error(error.response?.data?.message || 'Login failed');
    }
    throw error;
  }
};


