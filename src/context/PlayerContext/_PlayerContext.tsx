import { createContext } from 'react';

import type { IPlayerContext } from './_PlayerContext.annotations';

const PlayerContext = createContext<IPlayerContext | undefined>(undefined);

export default PlayerContext;
