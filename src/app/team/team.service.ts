import { Injectable } from "@angular/core";
import {Player} from "../players/player";
import { Subject } from "rxjs";

@Injectable()
export class TeamService
{
    myTeam : string;

    team : Array<Player>;

    //@SessionStorage()
    
    //subject
    private teamSource = new Subject<string>();

    //boradcaster
    teamBroadcaster = this.teamSource.asObservable();

    constructor()
    {
        if(this.myTeam)
        {
            this.team = JSON.parse(this.myTeam);
        }
        else
        {
            this.team = new Array<Player>();
        }
    }

    addToTeam(player : Player) : void
    {
        if(this.team.length == 11)
        {
            alert('Team Formation is completed. 11 players are already added.');
            return;
        }
        this.team = this.team.concat(player);

        console.log('Added to team ' + player.name);

        this.myTeam = JSON.stringify(this.team);


    }

    deleteFromTeam(player:Player) : void{
        this.team.splice(this.team.indexOf(player),1);
    }

    getTeamDetails():Array<Player>{
        return this.team;
    }

}