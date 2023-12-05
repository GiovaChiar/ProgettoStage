import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/pages/login/login.component";
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationService } from './services/authentication/authentication.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, LoginComponent, RegistrationComponent, HomepageComponent, NgbModule, HttpClientModule],
})
export class AppComponent {
  title = 'progettoFormazione';
  constructor(private modalService: NgbModal) {
  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
