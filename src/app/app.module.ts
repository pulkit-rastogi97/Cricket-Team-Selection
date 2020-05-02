import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularWebStorageModule } from 'angular-web-storage';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { PlayersComponent } from './players/players.component';
import { TeamComponent } from './team/team.component';
import { MatchComponent } from './match/match.component';
import { HeaderComponent } from './header/header.component';
import { TeamService } from './team/team.service';
 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginFormComponent,
    HomeComponent,
    PlayersComponent,
    TeamComponent,
    MatchComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularWebStorageModule,
    FormsModule,
     AppRoutingModule,
      ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
