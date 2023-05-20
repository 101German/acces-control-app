import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeContactInfoEditComponent } from './components/employee-contact-info-edit/employee-contact-info-edit.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeePassPageComponent } from './components/employee-pass-page/employee-pass-page.component';
import { EmployeePersonalInfoEditComponent } from './components/employee-personal-info-edit/employee-personal-info-edit.component';
import { EmployeeWorkInfoEditComponent } from './components/employee-work-info-edit/employee-work-info-edit.component';
import { EmployeesPageComponent } from './components/employees-page/employees-page.component';
import { EventLogsComponent } from './components/event-logs/event-logs.component';
import { PersonalPageComponent } from './components/personal-page/personal-page.component';
import { PlaceDetailsComponent } from './components/place-details/place-details.component';
import { PlacesComponent } from './components/places/places.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MainComponent } from './components/main/main.component';
import { RequestsComponent } from './components/requests/requests.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

const routes: Routes = [{path:'',component: MainComponent, children:[
  {path: '', component: UserPageComponent},
  {path: 'personal-page', component: PersonalPageComponent},
  {path: 'employees', component: EmployeesPageComponent},
  {path: 'create-employee', component: EmployeeEditComponent, children:[
    {path: '', redirectTo: "personal-info", pathMatch: "full"},
    {path: 'personal-info', component: EmployeePersonalInfoEditComponent},
    {path: 'work-info', component: EmployeeWorkInfoEditComponent },
    {path: 'contact-info', component: EmployeeContactInfoEditComponent }
  ]},
  {path: 'employees/:id', component: PersonalPageComponent},
  {path: 'employees/:id/edit', component: EmployeeEditComponent, children:[
    {path: '', redirectTo: "personal-info", pathMatch: "full"},
    {path: 'personal-info', component: EmployeePersonalInfoEditComponent},
    {path: 'work-info', component: EmployeeWorkInfoEditComponent },
    {path: 'contact-info', component: EmployeeContactInfoEditComponent }
  ]},
  {path: 'employees/:id/pass', component: EmployeePassPageComponent},
  {path: 'event-logs', component: EventLogsComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'place/:id', component: PlaceDetailsComponent},
  {path: 'requests', component: RequestsComponent},
] ,canActivate: [AuthGuardService]},
{path: 'sign-in', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
