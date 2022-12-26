import { Dispatch, SetStateAction } from 'react';

export interface IPlayerContext {
  name?: string;
  setName: Dispatch<SetStateAction<string | undefined>>;
}
