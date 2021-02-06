import store from 'store';

const KEY = 'userCurr';

export const saveUser = (user) => {
  store.set(KEY, user);
};

export const readUser = () => {
  return store.get(KEY) || {};
};

export const removeUser = () => {
  store.remove(KEY);
};
