import {
  ADD_USER
} from '../actions/types';

export function addUser(id, name) {
  return {
    type: ADD_USER,
    id,
    name
  };
}
