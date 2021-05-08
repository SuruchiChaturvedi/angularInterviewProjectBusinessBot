import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  player1:number = 0;
  player2:number = 0;
  winner:string ="";
  constructor() { }

  ngOnInit() {
  }

  Inc(val){

    if(val==1){
      this.player1++;
      if(this.player1==5){
        this.winner = "one";
      }
    }
    else{
      this.player2++;
      if(this.player2==5){
        this.winner = "two";
      }
    }
  }

  Reset(){
    this.player1=0;
    this.player2=0;
    this.winner="";
  }
}