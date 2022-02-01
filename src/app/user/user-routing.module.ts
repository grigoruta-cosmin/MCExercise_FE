import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlwaysAuthGuard } from "../_guards/AlwaysAuthGuard";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

export const userRoutes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: UserProfileComponent, canActivate: [AlwaysAuthGuard]},
    {path: 'home', component: HomeComponent, canActivate: [AlwaysAuthGuard]}, 
    {path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule {

}