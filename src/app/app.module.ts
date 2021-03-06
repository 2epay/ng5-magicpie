import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpClientModule }     from '@angular/common/http';

import { AppComponent }         from './app.component';
import { LoginComponent }       from './login/login.component';
import { AppRoutingModule }     from './app-routing.module';

import { PlayerService }        from './service/player.service';
import { MessageService }       from './service/message.service';
import { HomeComponent } from './home/home.component';
import { ObserComponent } from './obser/obser.component';

import { MagicPie } from './custom-module/magic-pie';
import { CustomeventComponent } from './customevent/customevent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ObserComponent,
    CustomeventComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ 
    PlayerService,
    MessageService,
    MagicPie,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
