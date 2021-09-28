import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line react/prop-types
export const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;
  const handleClick = () => {
    setContextState({ ...contextState, counter: counter + 1 });
  };
  return <p onClick={handleClick}>{body}</p>;
};
