import axios from 'axios';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:4000';

export interface User {
  userId: string;
  userName: string;
  userEmail: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserResponse {
  success: boolean;
  message: string;
  user?: User;
  users?: User[];
}

export const getCurrentUser = async (token: string): Promise<UserResponse> => {
  try {
    const response = await axios.get(`${API_URL}/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch user data');
    }
    throw error;
  }
};

export const updateUser = async (
  userId: string, 
  userData: Partial<User>, 
  token: string
): Promise<UserResponse> => {
  try {
    const response = await axios.put(`${API_URL}/user/${userId}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'User update failed');
    }
    throw error;
  }
};

export const deleteUser = async (userId: string, token: string): Promise<UserResponse> => {
  try {
    const response = await axios.delete(`${API_URL}/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'User deletion failed');
    }
    throw error;
  }
};

export const getAllUsers = async (token: string): Promise<UserResponse> => {
  try {
    const response = await axios.get(`${API_URL}/user/all`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch users');
    }
    throw error;
  }
};
