import { GridSquareStatus } from '../../context/GamePlayContext/_GamePlayContext.types';

export interface ISignButton {
  description: string;
  filename: string;
  name: string;
  onClick: () => void;
  status?: GridSquareStatus;
}
