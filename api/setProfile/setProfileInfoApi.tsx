import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:4000';



export interface ProfileInfoResponse {
  success: boolean;
  message: string;

}

export const setProfileInfo = async (formData:any): Promise<ProfileInfoResponse> => {
  try {
    
    const token = await AsyncStorage.getItem("Token");
    
    const response = await axios.post(`${API_URL}/api/UpdateProfileData`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
       
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
