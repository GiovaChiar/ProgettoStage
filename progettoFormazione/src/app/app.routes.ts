import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';

export const routes: Routes = [
    {path: "", component: LoginComponent},
    {path: "registration-page", component: RegistrationComponent},
    {path: "homepage", component: HomepageComponent}
];
