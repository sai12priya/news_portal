import axios from 'axios';

const API_KEY = 'f929ed7e24e84eb09c6ef930a821ca33';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category = 'general', page = 1) => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      category,
      page,
      pageSize: 10,
      apiKey: API_KEY,
      country: 'us'
    }
  });
  return response.data;
};
