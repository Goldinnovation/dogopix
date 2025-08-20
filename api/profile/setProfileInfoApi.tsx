import axios from 'axios';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:4000';

export interface ProfileInfoRequest {
  userName: string;
  userEmail?: string;
  avatar?: string;
  bio?: string;
  preferences?: {
    theme?: string;
    notifications?: boolean;
  };
}

export interface ProfileInfoResponse {
  success: boolean;
  message: string;
  profile?: {
    userId: string;
    userName: string;
    userEmail: string;
    avatar?: string;
    bio?: string;
    updatedAt: string;
  };
}

export const setProfileInfo = async (
  profileData: ProfileInfoRequest, 
  token: string
): Promise<ProfileInfoResponse> => {
  try {
    const response = await axios.post(`${API_URL}/profile/update`, profileData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Profile update failed');
    }
    throw error;
  }
};

export const getProfileInfo = async (token: string): Promise<ProfileInfoResponse> => {
  try {
    const response = await axios.get(`${API_URL}/profile/info`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch profile');
    }
    throw error;
  }
};

export const uploadAvatar = async (
  avatarFile: FormData, 
  token: string
): Promise<{ success: boolean; avatarUrl?: string; message: string }> => {
  try {
    const response = await axios.post(`${API_URL}/profile/avatar`, avatarFile, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Avatar upload failed');
    }
    throw error;
  }
};
