import { createContext } from 'react';

import type { IGamePlayContext } from './_GamePlayContext.annotations';

const GamePlayContext = createContext<IGamePlayContext | undefined>(undefined);

export default GamePlayContext;
