import { useAuth0 } from '@auth0/auth0-react';

const authService = () => {
  const {
    loginWithRedirect,
    logout,
    user,
    getAccessTokenSilently,
    isAuthenticated,
  } = useAuth0();

  const login = async () => {
    await loginWithRedirect();
  };

  const logoutUser = () => {
    logout({ returnTo: window.location.origin });
  };

  const getToken = async () => {
    try {
      const token = await getAccessTokenSilently();
      return token;
    } catch (error) {
      console.error('Error getting token', error);
      throw new Error('Unable to get token');
    }
  };

  return {
    login,
    logout: logoutUser,
    getToken,
    user,
    isAuthenticated,
  };
};

export default authService;
