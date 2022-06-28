import * as React from 'react';
import './style.scss';
import { CharacterType, fetchCharacter } from './characters';

import { Loading } from './Loading';
import { CharacterInformation } from './CharacterInformation';

type WithCharacterType = {
  character: CharacterType;
};
const withCharacter = <T extends WithCharacterType>(
  Component: React.ComponentType<T>
) => {
  return (props: Omit<T, keyof WithCharacterType>) => {
    const [character, setCharacter] = React.useState<CharacterType | null>(
      null
    );
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      fetchCharacter().then((c) => {
        setCharacter(c);
        setLoading(false);
      });
    }, []);

    if (loading) return <Loading />;
    return <Component {...(props as T)} character={character} />;
  };
};

const CharacterInformationWithCharacter = withCharacter(CharacterInformation);

const Application = () => {
  return (
    <main>
      <CharacterInformationWithCharacter />
    </main>
  );
};

export default Application;
