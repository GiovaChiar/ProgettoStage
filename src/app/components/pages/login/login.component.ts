import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTileComponent } from "../../utils/input-tile/input-tile.component";
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [CommonModule, InputTileComponent, RouterOutlet, RouterLink, RouterLinkActive],
    providers: [HttpClientModule, AuthenticationService]
})
export class LoginComponent{

  id = 'email'
  private id2 = 'username'
  wrongUsername = false
  messageUsername = ''

  pw = 'password'
  wrongPassword = false
  messagePassword = ''
  
  constructor(private autService: AuthenticationService, private route: Router){
    
  }
  changeId(){
    var tmp = this.id
    this.id = this.id2
    this.id2 = tmp
    this.wrongUsername = false
    this.autService.setUsername('')
    this.autService.setEmail('')
  }
  handleUsernameEmitted(value: string){
    if(this.id==='email'){
      const b = this.autService.setEmail(value)
      if(!b){
        this.wrongUsername = true
        this.messageUsername = "write an existing mail"
      }else
        this.wrongUsername = false
    }else
      this.autService.setUsername(value)
  }
  handlePasswordEmitted(value: string){
    this.wrongPassword = false
    this.autService.setPassword(value)
  }
  loginRequest(){
    switch(this.autService.tryLogin()){
      case 0:
        this.wrongPassword = true;
        this.wrongUsername = true;
        this.messageUsername = "missing username"
        this.messagePassword = "missing password"
        break
      case 1:
        this.wrongPassword = true
        this.messagePassword = "missing password"
        break
      case 2:
        this.wrongUsername = true
        this.messageUsername = "missing username"
        break
      case 3:
        this.wrongPassword = true;
        this.wrongUsername = true;
        this.messageUsername = "wrong credentials"
        this.messagePassword = "wrong credentials"
        break
      case 4:
        this.route.navigate(['library'])
        break
    }
  }
}
