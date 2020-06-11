import React, {Component} from 'react';
import './App.css';
import Pokegame from './Pokegame'

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>PokeGame</h1>
        <div className ="App-pokedex"> 
          <Pokegame />
        </div>
      </div>
    );
  }
}

export default App;
