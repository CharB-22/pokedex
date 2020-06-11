import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render(){
        let className1;
        if (this.props.isWinner === 'You are the Winner :)') {
            className1 = "Pokedex-winner";
        } else {
            className1 = "Pokedex-loser";
        }
        return (
            <div className="Pokedex">
                <div className="Pokedex-totalexp">Total experience: {this.props.exp}</div>
                <div className={className1}>{this.props.isWinner}</div>
                <div className="Pokedex-card">
                    {this.props.hand.map((p) => (
                     <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        )

    }
  }


export default Pokedex;