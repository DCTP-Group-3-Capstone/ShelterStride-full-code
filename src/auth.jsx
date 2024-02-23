export const getToken = () => {
    try {
      return localStorage.getItem("secret_token");
    } catch (error) {
      console.error("Error getting token from localStorage:", error);
      return null;
    }
  };
  
  export const setToken = (token) => {
    try {
      localStorage.setItem("secret_token", token);
    } catch (error) {
      console.error("Error setting token in localStorage:", error);
    }
  };
  
  export const removeToken = () => {
    try {
      localStorage.removeItem("secret_token");
    } catch (error) {
      console.error("Error removing token from localStorage:", error);
    }
  };
  
  export const isTokenValid = () => {
    try {
      const token = getToken();
      if (!token) {
        return false; // Token doesn't exist
      }
  
      const tokenData = JSON.parse(atob(token.split('.')[1])); // Decoding token payload
      const expirationTime = tokenData.exp * 1000; // Expiration time in milliseconds
  
      // Check if current time is past the expiration time
      return Date.now() < expirationTime;
    } catch (error) {
      console.error("Error validating token:", error);
      return false;
    }
  };
  
  export const isLoggedIn = () => {
    try {
      const token = getToken();
      const id = getId();
      return !!token, id;
    } catch (error) {
      console.error("Error checking login status:", error);
      return false;
    }
  };
  
  export const logout = () => {
    try {
      removeToken();
      removeId();
      // Additionally, you might want to redirect the user to the login page or perform any other necessary cleanup
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  


  export const getId = () => {
    try {
      // Retrieving the user object from localStorage
      const id = localStorage.getItem("id");
     // const user = JSON.parse(userString);
  
      // Accessing the id from the user object
     // const id = user.id;
  
      return id;
    } catch (error) {
      console.error("Error getting id from localStorage:", error);
      return null;
    }
  };
  
  
  export const setId = (id) => {
    try {
      localStorage.setItem("id", id);
    } catch (error) {
      console.error("Error setting id in localStorage:", error);
    }
  };
  
  export const removeId = () => {
    try {
      localStorage.removeItem("id");
    } catch (error) {
      console.error("Error removing token from localStorage:", error);
    }
  };
  

  