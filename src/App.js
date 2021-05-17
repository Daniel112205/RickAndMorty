import './App.css';
import { useState } from "react";
import Search from './components/Search';
import Location from './components/Location';
function App() {
  
  const numberAleatorio = Math.floor(Math.random() * 108)
  const [live ,setLive] = useState(numberAleatorio);  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty App</h1>
        <div style={{marginTop: '15px' }}>
          <Search handleSearch={setLive}/>
        </div>
      </header>
      <Location url={live} />
    </div>
  );
}

export default App;
