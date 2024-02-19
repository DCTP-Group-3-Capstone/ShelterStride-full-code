// auth.js

export const getToken = () => {
    return localStorage.getItem("secret_token");
  };
  
  export const setToken = (token) => {
    localStorage.setItem("secret_token", token);
  };
  
  export const removeToken = () => {
    localStorage.removeItem("secret_token");
  };
  
  export const isTokenValid = () => {
    const token = getToken();
    if (token) {
      // Decode the token to check if it's expired or not
      // Here, you would decode the token and check its expiration date
      // For demonstration, let's assume the token is always valid
      return true;
    } else {
      return false;
    }
  };

  
// Define the isLoggedIn function
export const isLoggedIn = () => {
    // Implement logic to check if the user is logged in
    // For example, you can check if the authentication token exists in localStorage
    const token = localStorage.getItem('secret_token');
    return !!token; // Return true if the token exists, false otherwise
  };
  
  // Define the logout function
export const logout = () => {
    // Implement the logout logic here
    // For example, you can remove the authentication token from localStorage
    localStorage.removeItem('secret_token');
    // Additionally, you might want to redirect the user to the login page or perform any other necessary cleanup
  };