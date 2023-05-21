import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './components/header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { PersonalPageComponent } from './components/personal-page/personal-page.component';
import { EmployeesPageComponent } from './components/employees-page/employees-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EventLogsComponent } from './components/event-logs/event-logs.component';
import { SearchPanelComponent } from './components/Shared/search-panel/search-panel.component';
import { PlacesComponent } from './components/places/places.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeePersonalInfoEditComponent } from './components/employee-personal-info-edit/employee-personal-info-edit.component';
import { EmployeeWorkInfoEditComponent } from './components/employee-work-info-edit/employee-work-info-edit.component';
import { EmployeeContactInfoEditComponent } from './components/employee-contact-info-edit/employee-contact-info-edit.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { EmployeePassPageComponent } from './components/employee-pass-page/employee-pass-page.component';
import { PlaceDetailsComponent } from './components/place-details/place-details.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { JwtModule } from '@auth0/angular-jwt';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MainComponent } from './components/main/main.component';
import { RequestsComponent } from './components/requests/requests.component';
import { RequestCreateFormComponent } from './components/request-create-form/request-create-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogRequestFormComponent } from './components/dialogs/dialog-request-form/dialog-request-form.component';
import { EnumToArrayPipe } from './pipes/EnumToArrayPipe';
import { UserPageComponent } from './components/user-page/user-page.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { CreateUserFormComponent } from './components/dialogs/create-user-form/create-user-form.component';
import { CreatePassComponent } from './components/dialogs/create-pass/create-pass.component';
import { CreateWorkroomComponent } from './components/dialogs/create-workroom/create-workroom.component';
import { EditWorkRoomComponent } from './components/dialogs/edit-work-room/edit-work-room.component';

export function tokenGetter() {
  return sessionStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatePassComponent,
    PersonalPageComponent,
    EmployeesPageComponent,
    EventLogsComponent,
    SearchPanelComponent,
    PlacesComponent,
    EmployeeEditComponent,
    EmployeePersonalInfoEditComponent,
    EmployeeWorkInfoEditComponent,
    EmployeeContactInfoEditComponent,
    EmployeePassPageComponent,
    PlaceDetailsComponent,
    SignInComponent,
    MainComponent,
    RequestsComponent,
    RequestCreateFormComponent,
    DialogRequestFormComponent,
    EnumToArrayPipe,
    UserPageComponent,
    AddEmployeeComponent,
    CreateUserFormComponent,
    CreateWorkroomComponent,
    EditWorkRoomComponent,
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    ScrollingModule,
    MatCheckboxModule,
    MatSortModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatMenuModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    OAuthModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
