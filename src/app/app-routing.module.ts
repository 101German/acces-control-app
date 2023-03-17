import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesPageComponent } from './components/employees-page/employees-page.component';
import { PersonalPageComponent } from './components/personal-page/personal-page.component';

const routes: Routes = [{path:'',component:PersonalPageComponent},
{path:'employees',component:EmployeesPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
