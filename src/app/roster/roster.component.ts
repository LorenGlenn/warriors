import { Component } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent {
  constructor(private router: Router){}

  players: Player[] = [
   new Player("Stephen Curry", "PG", "6'3", 180, 28, 1),
   new Player("Klay Thompson", "SG", "6'7", 200, 26, 2)
 ];

 goToDetailPage(selected: Player) {
  this.router.navigate(['roster', selected.id]);
};

}
