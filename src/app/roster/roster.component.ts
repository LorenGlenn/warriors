import { Component } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent {

  players: Player[] = [
   new Player("Stephen Curry", "PG", "6'3", 180, 28, 1),
   new Player("Klay Thompson", "SG", "6'7", 200, 26, 2)
 ];

}
