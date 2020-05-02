import { Component, OnInit, Injectable } from '@angular/core';
import { Player } from './player';
import { PlayersService } from './players.service';
import {TeamService} from '../team/team.service';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayersService]// register service with angular DI at products component

})

export class PlayersComponent  implements OnInit{

  players: Array<Player>;
  playerId : number;
  sub : any;
  isAdmin : boolean;

    // injected the service instance
  constructor(private activatedRoute:ActivatedRoute,private playersService: PlayersService, private teamService: TeamService) {
      this.players = playersService.getPlayers();
    }

    ngOnInit():void{

    var value = JSON.parse(localStorage.getItem("isAdmin"));
      
    // alert(typeof(value) + "from player");
    if(value == null || value == undefined)
    {
      // alert("hii");
      this.isAdmin = false;
    }
    else 
    {
      this.isAdmin = value;    
    } 
    

      this.sub = this.activatedRoute.params.subscribe(parameters => {
        this.playerId = parseInt(parameters['id']);
      })
    }

    showDetails(player : Player) : void{
      alert(player.name + " " + player.pos);
    }
    
    addToTeam(player : Player) : void{
      this.teamService.addToTeam(player);
    }
}
