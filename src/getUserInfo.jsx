import axios from 'axios';
import { getToken, getId } from './auth'; // Import getToken function from auth module

const getUserInfo = async () => {
  try {
    const token = getToken();
    const id = getId();

    
    if (!token || !id) {
      throw new Error('No authentication token or id found');
    }

    const response = await axios.get(`https://shelterstride.onrender.com/api/v1/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`

       
      }
      
    });

    

    const userInfo = response.data; // Assuming backend returns user information in JSON format
    console.log("User Information:", userInfo);
    return userInfo;

   
  } catch (error) {
    if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
      // Unauthorized error (token expired or invalid)
      console.error('Unauthorized error:', error.response.data);
      // Redirect to login page or prompt for reauthentication
     
    } else {
      // Handle other errors
      console.error('Error fetching user information:', error.message);
    }
    return null; // Return null or handle the error appropriately
  }
};

export { getUserInfo };
