import { Component, OnInit } from '@angular/core';
import {Player} from '../players/player';
import {TeamService} from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent{

  teamPlayers : Array<Player>;

  constructor(private teamService : TeamService) { 
    this.teamService.teamBroadcaster.subscribe(res => {
      alert(res);
      this.teamPlayers = JSON.parse(res);
    })

    this.teamPlayers = teamService.getTeamDetails();
  }

  deleteFromTeam(player : Player) : void {
    this.teamService.deleteFromTeam(player);

    this.teamPlayers = this.teamService.getTeamDetails();

    
  }

}
