import { useState } from 'react';

import PlayerContext from './_PlayerContext';
import type { IPlayerContextProvider } from './_PlayerContextProvider.annotations';

export const PlayerContextProvider = ({
  children,
}: IPlayerContextProvider): JSX.Element => {
  const [name, setName] = useState<string | undefined>();

  return (
    <PlayerContext.Provider
      value={{
        name,
        setName,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
