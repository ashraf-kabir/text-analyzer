import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/text-analyzer';

const textAnalyzerService = {
  list: async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  },

  get: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  },

  add: async (text) => {
    const response = await axios.post(API_BASE_URL, { text });
    return response.data;
  },

  update: async (id, text) => {
    const response = await axios.put(`${API_BASE_URL}/${id}`, { text });
    return response.data;
  },

  remove: async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  },

  countWords: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/count-words/${id}`);
    return response.data;
  },

  countCharacters: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/count-characters/${id}`);
    return response.data;
  },

  countSentences: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/count-sentences/${id}`);
    return response.data;
  },

  countParagraphs: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/count-paragraphs/${id}`);
    return response.data;
  },

  longestWord: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/longest-word/${id}`);
    return response.data;
  },
};

export default textAnalyzerService;
