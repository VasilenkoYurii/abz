import { create } from 'zustand';
import axios from 'axios';

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const registerStore = create((set, get) => ({
  positions: [],
  token: null,
  isLoading: false,
  successSend: false,

  getToken: async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/token`);
      set({ token: data.token });
    } catch {}
  },

  getPositions: async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/positions`);
      set({ positions: data.positions });
    } catch {}
  },

  postUser: async (data, selectedFile, reset) => {
    try {
      const formData = new FormData();
      formData.append('position_id', data.userPosition);
      formData.append('name', data.userName);
      formData.append('email', data.userEmail);
      formData.append('phone', data.userPhone);
      formData.append('photo', selectedFile);

      const { token } = get();

      await axios.post(`${BASE_URL}/users`, formData, {
        headers: {
          Token: token,
          'Content-Type': 'multipart/form-data',
        },
      });

      set({ successSend: true });
      reset();
    } catch {}
  },
}));
