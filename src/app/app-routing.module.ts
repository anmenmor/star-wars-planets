import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component'

const routes: Routes = [
  { path: '', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'films', component: FilmListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
