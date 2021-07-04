import logo from './logo.svg';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Trolazo
        </p>
      </header>
    </div>
  );
}

export default App;
