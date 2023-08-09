import logo from './k8slogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          FrontEnd Application version 0.1
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Front App
        </a>
        <br />
        <img src={logo}  className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
