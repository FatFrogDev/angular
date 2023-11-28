import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path:'', component: HomePageComponent },
  { path:'login', component : LoginComponent },
  {path:'register', component : RegisterComponent},
  {path:'recover-password', component : RecoverPasswordComponent},
  { path:"home-page", component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
