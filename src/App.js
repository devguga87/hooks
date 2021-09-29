import P from 'prop-types';
import { createContext, useContext, useReducer, useRef, useState } from 'react';
import './App.css';

//data.js
export const globalState = {
  title: 'O titulo do contexto',
  body: 'O body do contexto',
  counter: 0,
};

//reducer.js
const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_TITLE': {
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};

//AppContext.jsx
export const Context = createContext();

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = payload => {
    dispatch({ type: 'CHANGE_TITLE', payload });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};

//H1/index.jsx
const H1 = () => {
  const context = useContext(Context);
  const { state, changeTitle } = context;
  const inputRef = useRef(null);

  return (
    <>
      <h1 onClick={() => changeTitle(inputRef.current.value)}>{state.title}</h1>
      <input ref={inputRef} type="text" />
    </>
  );
};

//App.jsx
function App() {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;
