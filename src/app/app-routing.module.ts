import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { MatchComponent } from './match/match.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'login', component: LoginFormComponent },
  { path: 'home', component : HomeComponent },
  { path: 'players', component: PlayersComponent},
  { path: 'match', component: MatchComponent},
  {path: 'team' ,component: TeamComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
