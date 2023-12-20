import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/pages/login/login.component";
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationService } from './services/authentication/authentication.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CorsRequest } from 'cors';
import { AsyncLocalStorage } from 'node:async_hooks';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, LoginComponent, RegistrationComponent, NgbModule, HttpClientModule,RouterOutlet, RouterLink, RouterLinkActive, NgbPaginationModule, NgbAlertModule],
})
export class AppComponent{
  title = 'progettoFormazione';
  constructor(private modalService: NgbModal) {
  }
  public isLoggedIn(){
    if (typeof localStorage !== 'undefined'){
      const ver = localStorage.getItem('user');
      if(!ver)
        return false
      else
        return true
    }else
      return false
  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
