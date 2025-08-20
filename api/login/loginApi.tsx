import axios from 'axios';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:4000';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    userId: string;
    userName: string;
    userEmail: string;
    role: string;
  };
}

export const loginUser = async (loginData: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, loginData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
    throw error;
  }
};


