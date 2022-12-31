import { GridSquareStatus } from '../../context/GamePlayContext/_GamePlayContext.types';

export interface ISignButton {
  description: string;
  file: string;
  name: string;
  onClick: () => void;
  status?: GridSquareStatus;
}
