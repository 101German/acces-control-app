import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EmployeeRegisterInfo } from '../models/Employee/EmployeeRegisterInfo';

@Injectable({
  providedIn: 'root'
})
export class RegisterInfoService {
  public registerInfo$ = new Subject<EmployeeRegisterInfo>();
  constructor() { }

  public changeRegisterInfo(data: EmployeeRegisterInfo){
    this.registerInfo$.next(data);
  }
}
