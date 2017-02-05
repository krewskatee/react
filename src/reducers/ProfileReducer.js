import {
ADD_USER
} from '../actions/types';

const INITIAL_STATE = {
  id: null,
  name: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, ...INITIAL_STATE, id: action.id, name: action.name };
    default:
      return state;
  }
};
