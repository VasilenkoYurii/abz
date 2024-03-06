import { create } from 'zustand';
import axios from 'axios';

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const usersStore = create((set, get) => ({
  users: [],
  isLoading: false,
  error: null,
  userLimit: 6,
  page: 1,
  totalPages: 0,

  getUsers: async type => {
    if (type === 'refresh') {
      try {
        const { userLimit } = get();
        set({ isLoading: true, page: 1 });

        const { data } = await axios.get(
          `${BASE_URL}/users?page=1&count=${userLimit}`
        );

        set({
          totalPages: data.total_pages,
          users: [...data.users],
          isLoading: false,
          page: 2,
        });
      } catch (error) {
        set({
          isLoading: false,
          error: 'Something went wrong, try again =(',
        });
      }
    } else {
      try {
        const { page, userLimit } = get();
        set({ isLoading: true });

        const { data } = await axios.get(
          `${BASE_URL}/users?page=${page}&count=${userLimit}`
        );

        set(state => ({
          totalPages: data.total_pages,
          users: [...state.users, ...data.users],
          isLoading: false,
          page: state.page + 1,
        }));
      } catch (error) {
        set({ isLoading: false, error: 'Something went wrong, try again =(' });
      }
    }
  },
}));
