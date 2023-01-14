import { createContext } from 'react';

import type { GamePlayContext } from './_GamePlayContext.annotations';

const GamePlayContext = createContext<GamePlayContext | undefined>(undefined);

export default GamePlayContext;
