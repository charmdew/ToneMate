import { axios } from '@/lib/axios';

export const postPitch = ({ formData }) => {
  return axios.post('/music/timbre', formData);
};