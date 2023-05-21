import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EmployeeContactInfo } from '../models/Employee/EmployeeContactInfo';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {
  public contactInfo$ = new Subject<EmployeeContactInfo>();
  constructor() { }

  public changeContactInfo(data: EmployeeContactInfo){
    this.contactInfo$.next(data);
  }
}
