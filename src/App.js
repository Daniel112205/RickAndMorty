import './App.css';
import { useState } from "react";
import Search from './components/Search';
import Location from './components/Location';
function App() {
  //Numbers aleatorio for ID
  const numberAleatorio = Math.floor(Math.random() * 109)
  const [live ,setLive] = useState(numberAleatorio);  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty App</h1>
        <div style={{marginTop: '15px' }}>
          {/* Get value for ID */}
          <Search handleSearch={setLive}/>
        </div>
      </header>
      {/* POST value ID */}
      <Location url={live} />
    </div>
  );
}

export default App;
