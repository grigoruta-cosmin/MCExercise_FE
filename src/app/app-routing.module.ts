import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UniversityRegisterComponent } from './university-register/university-register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AlwaysAuthGuard } from './_guards/AlwaysAuthGuard'


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: UserProfileComponent, canActivate: [AlwaysAuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AlwaysAuthGuard]},
  {path: 'university', component: UniversityRegisterComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
