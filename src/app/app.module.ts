import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { appRoutes } from './routes'
import { AppComponent }  from './app.component';
import { NavBarComponent }  from './nav-bar.component';
import { CoursesComponent } from "./catalog/catalog.component";
import { RegisterComponent } from "./users/sign-in.component";
import { SignInComponent } from "./users/sign-in.component";
import { LoadingComponent } from "./components/loading-spinner.component";
import { DataRepositoryService } from "./services/data-repository.service"
import { AccountMenuComponent } from "./account-menu.component";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    CoursesComponent,
    RegisterComponent,
    SignInComponent,
    LoadingComponent,
    AccountMenuComponent
  ],
  providers: [ DataRepositoryService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }