import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable()
export class PlayersService {

    private players:Array<Player>;
    constructor() { 
        console.log('Proudcts Service!');
        let p1 = new Player(1, "Shikhar Dhawan", "./assets/player_images/p1.png", "Batsman");
        let p2 = new Player(2, "Ravindra Jadeja", "./assets/player_images/p2.png", "All Rounder");
        let p3 = new Player(3, "Rohit Sharma", "./assets/player_images/p3.png", "Batsman");
        let p4 = new Player(4, "Virat Kohli", "./assets/player_images/p4.png","Batsman");
        let p5 = new Player(5, "Yuzvendra Chahal", "./assets/player_images/p5.png","Bowler");
        let p6 = new Player(6, "Kedar Mahadav Jadhav", "./assets/player_images/p6.png","Batsman");
        let p7 = new Player(7, "Ravichandran Ashwin", "./assets/player_images/p7.png","Bowler");
        let p8 = new Player(8, "Jasprit Jasbirsingh Bumrah", "./assets/player_images/p8.png","Bowler");
        let p9 = new Player(9, "Rishabh Rajendra Pant", "./assets/player_images/p9.png","Batsman");
        let p10 = new Player(10, "Hardik Himanshu Pandya", "./assets/player_images/p10.png","Batsman");
        let p11 = new Player(11, "Kuldeep Yadav", "./assets/player_images/p11.png","Batsman");
        let p12 = new Player(12, "Sanju Samson", "./assets/player_images/p12.png","Batsman");
        let p13 = new Player(13, "Shami Ahmed", "./assets/player_images/p13.png","Bowler");
        let p14 = new Player(14, "Kannaur Lokesh Rahul", "./assets/player_images/p14.png","Batsman");
        let p15 = new Player(15, "Ishant Sharma", "./assets/player_images/p15.png","Batsman");

        this.players = new Array<Player>();
        this.players.push(p1);
        this.players.push(p2);
        this.players.push(p3);
        this.players.push(p4);
        this.players.push(p5);
        this.players.push(p6);
        this.players.push(p7);
        this.players.push(p8);
        this.players.push(p9);
        this.players.push(p10);
        this.players.push(p11);
        this.players.push(p12);
        this.players.push(p13);
        this.players.push(p14);
        this.players.push(p15);
         
    }
    getPlayers():Array<Player>{
        return this.players;   
    }

}