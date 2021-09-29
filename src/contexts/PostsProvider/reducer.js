import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_LOADING: {
      console.log(action.type);
      return { ...state, loading: true };
    }
    case types.POSTS_SUCCESS: {
      return { ...state, posts: action.payload, loading: false };
    }
  }
  console.log('nao encontrei a action', action.type);
  return { ...state };
};
