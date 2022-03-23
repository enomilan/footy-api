import logo from './logo.svg';
import {useEffect, useState} from 'react'
import './App.css';




function App() {

  const [team, setTeam] = useState([])
  const [player, setPlayer] = useState([])


  useEffect(() => {

    async function fetchData () {
        const res = await fetch('https://api-football-v1.p.rapidapi.com/v3/players?team=33&season=2020',
        {
          "headers": {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": '' }
        })
        const player = await res.json()
                                  
        setPlayers(player)
            
        
    }
     
    fetchData()
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input type ='text'></input>
          {setPlayer.map((val, key) => {
              return {val}
          })}
        </p>
        
      </header>
    </div>
  );
}

export default App;
