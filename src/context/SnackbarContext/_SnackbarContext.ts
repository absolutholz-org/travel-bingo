import { createContext } from 'react';

import type { ISnackbarContext } from './_SnackbarContext.annotations';

const SnackbarContext = createContext<ISnackbarContext | undefined>(undefined);

export default SnackbarContext;
