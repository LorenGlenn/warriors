import { Injectable } from '@angular/core';
import { Player } from './player.model';
// import { PLAYERS } from './mock-players';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.players = angularFire.database.list('players')
   }

  getPlayers() {
  return this.players;
}

addPlayer(newPlayer: Player) {
  this.players.push(newPlayer);
}


findPlayerById(playerId: string){
  return this.angularFire.database.object('players/' + playerId);
  }

updatePlayer(updatedPlayer){
  var playerFirebase = this.findPlayerById(updatedPlayer.$key);
  playerFirebase.update({name: updatedPlayer.name,
                         position: updatedPlayer.position,
                         height: updatedPlayer.height,
                         weight: updatedPlayer.weight,
                         age: updatedPlayer.age});
}


}
