import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTileComponent } from "../../utils/input-tile/input-tile.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [CommonModule, InputTileComponent, RouterOutlet, RouterLink, RouterLinkActive]
})
export class LoginComponent{
  id = 'username'
  pw = 'password'
  constructor(private autService: AuthenticationService){
    
  }
  handleUsernameEmitted(value: string){
    this.autService.setUsername(value)
  }
  handlePasswordEmitted(value: string){
    this.autService.setPassword(value)
  }
  loginRequest(){
    this.autService.tryLogin();
  }
}
