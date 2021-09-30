import { useContext, useEffect } from 'react';
import {
  decrementCounter,
  incrementCounter,
} from '../../contexts/CounterProvider/action';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/action';
import { PostsContext } from '../../contexts/PostsProvider/context';

export const Posts = () => {
  const { postsState, postsDispatch } = useContext(PostsContext);
  const { counterState, counterDispatch } = useContext(CounterContext);

  useEffect(() => {
    loadPosts(postsDispatch);
  }, [postsDispatch]);
  return (
    <div>
      <h1>Posts !</h1>
      <h2>Counter: {counterState.counter}</h2>
      <button onClick={() => incrementCounter(counterDispatch)}>+</button>
      <button onClick={() => decrementCounter(counterDispatch)}>-</button>

      {postsState.posts.map(post => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
};
