import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
const API_URL = process.env.EXPO_PUBLIC_API_URL ;
import * as SecureStore from 'expo-secure-store';


export interface ProfileInfoResponse {
  success: boolean;
  message: string;
  userId: string; 
  userProfileImage: string; 
  

}

export const setProfileInfo = async (formData:any): Promise<ProfileInfoResponse> => {
  try {
    
    const token =  await SecureStore.getItemAsync("Token");
    console.log('sent it from api setProfile on token', token );
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
