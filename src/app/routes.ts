import { Routes } from '@angular/router';
import { CoursesComponent } from './catalog/catalog.component';
import { RegisterComponent } from './users/register.component';
import { SignInComponent } from './users/sign-in.component';

export const appRoutes : Routes = [
  { path: 'catalog', component: CoursesComponent, },
  { path: 'users/register', component: RegisterComponent, },
  { path: 'users/sign-in', component: SignInComponent, },
];
