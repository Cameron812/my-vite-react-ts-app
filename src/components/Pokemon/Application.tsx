import React from 'react';
import Pokemon from './Pokemon';

const pokemons = ['bulbasaur', 'pikachu', 'ditto', 'bulbasaur'];
const PokemonWithApplication = () => {
  return (
    <div>
      {pokemons.map((pokemon: string, index: number) => {
        return <Pokemon key={index} name={pokemon} />;
      })}
    </div>
  );
};

export default PokemonWithApplication;
