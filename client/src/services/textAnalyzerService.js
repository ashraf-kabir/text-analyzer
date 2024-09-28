import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/text-analyzer';

const textAnalyzerService = {
  setAuthToken: (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  },

  list: async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      if (error.response.status === 429) {
        window.location.href = '/too-many-requests';
      }
    }
  },

  get: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      if (error.response.status === 429) {
        window.location.href = '/too-many-requests';
      }
    }
  },

  add: async (text) => {
    // const response = await axios.post(API_BASE_URL, { text });
    // return response.data;
    try {
      const response = await axios.post(API_BASE_URL, { text });
      return response.data;
    } catch (error) {
      console.error('Error adding text:', error);
      if (error.response.status === 429) {
        window.location.href = '/too-many-requests';
      }
    }
  },

  update: async (id, text) => {
    // const response = await axios.put(`${API_BASE_URL}/${id}`, { text });
    // return response.data;
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, { text });
      return response.data;
    } catch (error) {
      console.error('Error updating text:', error);
      if (error.response.status === 429) {
        window.location.href = '/too-many-requests';
      }
    }
  },

  remove: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting text:', error);
      if (error.response.status === 429) {
        window.location.href = '/too-many-requests';
      }
    }
  },

  countWords: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/count-words/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error counting words:', error);
      if (error.response.status === 429) {
        window.location.href = '/too-many-requests';
      }
    }
  },

  countCharacters: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/count-characters/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error counting characters:', error);
      if (error.response.status === 429) {
        window.location.href = '/too-many-requests';
      }
    }
  },

  countSentences: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/count-sentences/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error counting sentences:', error);
      if (error.response.status === 429) {
        window.location.href = '/too-many-requests';
      }
    }
  },

  countParagraphs: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/count-paragraphs/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error counting paragraphs:', error);
      if (error.response.status === 429) {
        window.location.href = '/too-many-requests';
      }
    }
  },

  longestWord: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/longest-word/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching longest word:', error);
      if (error.response.status === 429) {
        window.location.href = '/too-many-requests';
      }
    }
  },
};

export default textAnalyzerService;
