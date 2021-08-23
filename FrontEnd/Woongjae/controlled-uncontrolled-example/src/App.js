import logo from './logo.svg';
import './App.css';
import Controlled from './components/Controlled';
import UnControlled from './components/Uncontrolled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Controlled />
        <UnControlled />
      </header>
    </div>
  );
}

export default App;
