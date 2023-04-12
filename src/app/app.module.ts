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
import { EmployeePassPageComponent } from './components/employee-pass-page/employee-pass-page.component';
import { PlaceDetailsComponent } from './components/place-details/place-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatPaginatorModule,
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
