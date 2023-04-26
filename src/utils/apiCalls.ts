import { User } from '@/types/default';
import axios from 'axios';

export const updateCurrentUser = async (user: User) => {
  const { data } = await axios({
    method: 'PUT',
    url: '/api/users?scope=update_current_user',
    data: user,
  });

  return {
    data: data.data,
    message: data.message,
    status: data.status,
  };
};

export const getCurrentUser = async () => {
  const { data } = await axios({
    method: 'GET',
    url: `/api/users?scope=current_user`,
  });

  return {
    data: data.data,
    message: data.message,
    status: data.status,
  };
};
