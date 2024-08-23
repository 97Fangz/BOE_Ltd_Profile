import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const sendInquiry = async (data: FormData) => {
  return await axios.post(`${API_URL}/contact`, data);
};

export const fetchInquiries = async () => {
  return await axios.get(`${API_URL}/inquiries`);
};

