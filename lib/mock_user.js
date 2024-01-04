import axios from 'axios';

const MockUser = {
  fakeData: async () => {
    const baseURL = 'https://9caa-45-71-76-157.ngrok-free.app';
    const userData = baseURL + '/api/v1/user';

    try {
      const response = await axios.get(userData);
      return response.data;
    } catch (error) {
      console.error('error:', error.message);
      return null;
    }
  },
}

export default MockUser;
