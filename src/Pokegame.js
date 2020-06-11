import React, {Component} from 'react';
import Pokedex from './Pokedex'
import './Pokegame.css';

class Pokegame extends Component {
    render(){
        const pokeHand = [{id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}];
        const pokedex1 = [];
        const pokedex2 = [];
  
        // Randomly assigned pokemons to the first pokedex and remove them from the main array
        for (let i = 0; i < 4; i ++){
          let index = Math.floor(Math.random() * pokeHand.length);
          pokedex1.push(pokeHand[index]);
          pokeHand.splice(index, 1);
        }
  
        // Assigned the remaining pokemons to the second Pokedex
        for (let j=0; j < pokeHand.length; j++ ){
          pokedex2.push(pokeHand[j]);
        }

        //Calculate the total experience on each hand
        let expPlayer1 = 0;
        for (let i = 0; i < pokedex1.length; i++){
            expPlayer1 = expPlayer1 + pokedex1[i].base_experience;
        }
        let expPlayer2 = 0;
        for (let j = 0; j < pokedex1.length; j++){
            expPlayer2 = expPlayer2 + pokedex2[j].base_experience;
        }

        return (
            <div className="Pokegame">
                <h2>Pokedex Player 1</h2>
                <Pokedex  hand={pokedex1} exp= {expPlayer1} isWinner= {expPlayer1 > expPlayer2 ? 'You are the Winner :)': 'You lost :('}/>
                <h2>Pokedex Player 2</h2>
                <Pokedex hand={pokedex2} exp= {expPlayer2} isWinner= {expPlayer2 > expPlayer1 ? 'You are the Winner :)': 'You lost :('}/>
            </div>
            )
    }
}

export default Pokegame;