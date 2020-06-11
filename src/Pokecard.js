import React, {Component} from 'react';
import './Pokecard.css'


const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
class Pokecard extends Component {
    render(){
        let id = this.props.id;
        let idString = id.toString().padStart(3,'0')
        let imgSrc = `${POKE_API}${idString}.png`
        return(
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img className="Pokecard-img" src={imgSrc} alt={this.props.name}/>
                <div className="Pokecard-type">Type: {this.props.type}</div>
                <div className="Pokecard-exp">Exp: {this.props.exp}</div>
            </div>
        )
    }
}


export default Pokecard;