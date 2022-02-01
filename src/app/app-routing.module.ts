import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { universityRoutes } from './university/university-routing.component';
import { UniversityComponent } from './university/university.component';
import { userRoutes } from './user/user-routing.module';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: 'user', children: userRoutes, component: UserComponent},
  {path: 'university', children: universityRoutes, component: UniversityComponent},
  {path: '', redirectTo: 'user', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
