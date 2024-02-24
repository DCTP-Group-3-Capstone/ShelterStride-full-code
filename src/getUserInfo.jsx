import axios from 'axios';
import { getId, getToken } from './auth'; // Import both getToken and getId functions from auth module

const getUserInfo = async () => {
  try {
    // Get the user ID from local storage
    const id = getId();
    
    // Get the token from local storage
    const secret_token = getToken(); 

    if (!secret_token || !id) {
      throw new Error('No authentication token or id found');
    }

    // Make a GET request to the backend API to fetch user information
    const response = await axios.get(`https://shelterstride.onrender.com/api/v1/users/${id}?secret_token=${secret_token}`);

    

    // Extract user information from the response data
    const userInfo = response.data;
    
    // Log the user information to the console
   // console.log("User Information:", userInfo);
    
    // Return the user information
    return userInfo;
  } catch (error) {
    // Handle errors
    if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
      console.error('Unauthorized error:', error.response.data);
    } else {
      console.error('Error fetching user information:', error.message);
    }
    return null;
  }
};

export { getUserInfo };
