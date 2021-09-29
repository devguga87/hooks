import { useContext, useEffect, useRef } from 'react';
import {
  decrementCounter,
  incrementCounter,
} from '../../contexts/CounterProvider/actions';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';

export const Posts = () => {
  const isMounted = useRef(true);
  const { postsDispatch, postsState } = useContext(PostsContext);

  const { counterState, counterDispatch } = useContext(CounterContext);

  useEffect(() => {
    loadPosts(postsDispatch).then(dispatch => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <h1>Posts {counterState.counter}</h1>
      <button onClick={() => incrementCounter(counterDispatch)}>
        increment
      </button>
      <button onClick={() => decrementCounter(counterDispatch)}>
        decrement
      </button>
      {postsState.loading && <p> Carregando posts...</p>}

      {postsState.posts.map(post => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
};
