import { getInstance } from './helpers';

const instance = getInstance();

export async function login({ email, password }) {
  return instance.post('users/login', {
    email,
    password,
  });
}

export async function register({ email, password }) {
  return instance.post('auth/token', {
    email,
    password,
  });
}
