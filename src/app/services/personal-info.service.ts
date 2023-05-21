import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EmployeePersonalInfo } from '../models/Employee/EmployeePersonalInfo';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  public personalInfo$ = new Subject<EmployeePersonalInfo>();
  constructor() { }

  public changePersonalInfo(data: EmployeePersonalInfo){
    this.personalInfo$.next(data);
  }
}
