import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';


@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {

  transform(input: Player[], desiredPosition){
    var output: Player[] = [];
    if(desiredPosition === "guards") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === 'pg' || input[i].position === 'sg') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPosition === "forwards") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === 'sf' || input[i].position === 'pf'  || input[i].position === 'c') {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
