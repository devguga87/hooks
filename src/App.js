import P, { number } from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

const Post = ({ post, handleClick }) => {
  return (
    <div className="post">
      <h2 style={{ fontSize: '14px' }} onClick={() => handleClick(post.title)}>
        {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function App() {
  console.log('Pai renderizou!');

  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const contador = useRef(0);
  //component did mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(posts => posts.json())
      .then(post => setPosts(post));
  }, []);

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef.current);
  }, [value]);

  useEffect(() => {
    contador.current++;
  });

  const handleClick = value => {
    setValue(value);
  };

  return (
    <div className="App">
      <h1>Renderizou:{contador.current}x</h1>
      <p>
        <input
          ref={inputRef}
          type="search"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </p>

      {useMemo(() => {
        return posts.length > 0 ? (
          posts.map(post => {
            return <Post post={post} key={post.id} handleClick={handleClick} />;
          })
        ) : (
          <p>Ainda nao existem posts</p>
        );
      }, [posts])}
    </div>
  );
}

export default App;
