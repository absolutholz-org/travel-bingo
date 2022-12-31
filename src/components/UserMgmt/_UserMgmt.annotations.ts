import { Player } from '../../annotations/Player';

export interface IUserMgmt {
  onLogIn?: (player: Player) => void;
  onLogOut?: (player: Player) => void;
}
