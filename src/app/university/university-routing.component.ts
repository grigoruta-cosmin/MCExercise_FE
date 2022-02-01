import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UniversityAuthGuard } from "../_guards/UniversityAuthGuard";
import { UniversityHomeComponent } from "./university-home/university-home.component";
import { UniversityLoginComponent } from "./university-login/university-login.component";
import { UniversityProfileComponent } from "./university-profile/university-profile.component";
import { UniversityRegisterComponent } from "./university-register/university-register.component";

export const universityRoutes = [
    {path: 'register', component: UniversityRegisterComponent},
    {path: 'login', component: UniversityLoginComponent},
    {path: 'home', component: UniversityHomeComponent, canActivate: [UniversityAuthGuard]},
    {path: 'profile', component: UniversityProfileComponent, canActivate: [UniversityAuthGuard]},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
    imports: [
        RouterModule.forChild(universityRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UniversityRoutingModule {
    
}