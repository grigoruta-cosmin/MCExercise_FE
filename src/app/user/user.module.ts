import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AddSymbolPipe } from "./add-plus.pipe";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { NavComponent } from "./nav/nav.component";
import { RegisterComponent } from "./register/register.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";



@NgModule({
    declarations: [
        UserComponent,
        HomeComponent, 
        LoginComponent,
        RegisterComponent,
        NavComponent,
        UserProfileComponent,
        UserFormComponent,
        AddSymbolPipe
    ],
    exports: [
        UserComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        UserRoutingModule
    ]
})
export class UserModule {
    
}