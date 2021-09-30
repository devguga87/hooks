import * as types from './types';

export const loadPosts = async dispatch => {
  const postsFetch = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsFetch.json();
  dispatch({ type: types.POSTS_SUCCESS, payload: posts });
};
