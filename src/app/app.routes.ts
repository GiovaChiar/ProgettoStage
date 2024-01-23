import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { authGuard } from './guards/auth/auth.guard';
import { CatalogueComponent } from './components/pages/catalogue/catalogue.component';
import { LibraryComponent } from './components/pages/library/library.component';
import { AccountComponent } from './components/pages/account/account.component';
import { BookpageComponent } from './components/utils/bookpage/bookpage.component';
import { AdminComponent } from './components/pages/admin/admin.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent,},
    {path: "admin", component: AdminComponent},
    {path: "registration-page", component: RegistrationComponent},
    {path: "account", canActivate: [authGuard], component: AccountComponent},
    {path: "catalogue", component: CatalogueComponent, children: [{path: ":id", component: BookpageComponent}]},
    {path: "library", canActivate: [authGuard],component: LibraryComponent, children:[{path: ":id", component: BookpageComponent}], }
];

