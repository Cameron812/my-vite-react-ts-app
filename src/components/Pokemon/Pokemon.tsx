import React from 'react';
import { useGetPokemonByNameQuery } from './PokemonApi';

const Pokemon = ({ name }: { name: string }) => {
  const { data, error, isFetching } = useGetPokemonByNameQuery(name);

  return (
    <div>
      {error ? (
        <div>oh no, there was an error</div>
      ) : isFetching ? (
        <div>loading...</div>
      ) : data ? (
        <div>
          <h3>{name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </div>
      ) : null}
    </div>
  );
};

export default Pokemon;
