import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       reverse: false,
//     };
//   }

//   handleClick = () => {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           <button type="button" onClick={this.handleClick}>
//             Reverse
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleIncrement = () => {
    setCounter(counter => counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter => counter - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Contador: {counter}</h1>
        <button type="button" onClick={handleClick}>
          Reverse
        </button>
        <button type="button" onClick={handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={handleDecrement}>
          Decrement
        </button>
      </header>
    </div>
  );
}

export default App;
