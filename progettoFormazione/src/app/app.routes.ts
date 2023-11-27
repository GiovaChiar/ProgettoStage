import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: "", component: LoginComponent},
    {path: "registration-page", component: RegistrationComponent},
    {path: "homepage", canActivate: [authGuard],component: HomepageComponent}
];
