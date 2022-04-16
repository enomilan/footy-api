import logo from './logo.svg';
import {useEffect, useState} from 'react'
import './App.css';




function App() {

  const [team, setTeam] = useState([])
  const [players, setPlayers] = useState([])


  useEffect(() => {


    //change to then
    async function fetchData () {
        const res = await fetch('https://api-football-v1.p.rapidapi.com/v3/players?team=33&season=2020',
        {
          "headers": {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": "xxxxxxx" }
        })
        const player = await res.json()
                                  
        setPlayers(player)
            
        
    }
     
    fetchData()
}, [])

console.log(players)

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          <input type ='text'></input>

          {players.map((player) => {
              return {player}
          })}
        </p>
        
      </header>
    </div>
  );
}

export default App;









