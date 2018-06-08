import { Component, OnInit } from '@angular/core';

import { PlayerService } from '../service/player.service';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userData: Array<any>;
  public userInput = {
    "username": "",
    "password": ""
  };
  public userInputState = {
    "username": true,
    "password": true,
    "onProgress": false
  };
  msg = {
    "error": {
      "username": "Username is wrong.",
      "password": "Password is wrong."
    },
    "success": {
      "login": "Login successfully."
    }
  };
  public message = '';

  constructor(private playerService: PlayerService) {
    
    this.playerService.getPlayer()
      .subscribe(resData => {
        this.userData = resData.users
      });
  }

  login(): void {
    let msgError = '';

    for( let user of this.userData ) {
      if ( user.username === this.userInput.username ) {
        this.userInputState.username = true;
                
        if ( user.password === this.userInput.password ) {
          msgError = '';
          this.userInputState.password = true;
          this.userInputState.onProgress = true;
        } else {
          msgError = this.msg.error.password;
          this.userInputState.password = false;
        }
      } else {
        msgError = this.msg.error.username;
        this.userInputState.username = false;
      }
    }

    this.showMessage(msgError);
  }

  showMessage(msg: string): void {
    this.message = msg;
  }
}
