import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { UniversityRegisterComponent } from "./university-register/university-register.component";
import { UniversityRoutingModule } from "./university-routing.component";
import { UniversityComponent } from "./university.component";
import { UniversityLoginComponent } from './university-login/university-login.component';
import { UniversityHomeComponent } from './university-home/university-home.component';
import { UniversityNavComponent } from './university-nav/university-nav.component';
import { UniversityProfileComponent } from './university-profile/university-profile.component';
import { UniversityFormComponent } from './university-form/university-form.component';

@NgModule({
    declarations: [
        UniversityComponent,
        UniversityRegisterComponent,
        UniversityLoginComponent,
        UniversityHomeComponent,
        UniversityNavComponent,
        UniversityProfileComponent,
        UniversityFormComponent
    ],
    exports: [
        UniversityComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        UniversityRoutingModule
    ]
})
export class UniversityModule {

}