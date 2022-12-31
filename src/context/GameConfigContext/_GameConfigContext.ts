import { createContext } from 'react';

import type { IGameConfigContext } from './_GameConfigContext.annotations';

const GameConfigContext = createContext<IGameConfigContext | undefined>(
  undefined
);

export default GameConfigContext;
