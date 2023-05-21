import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WorkEmployeeInfo } from '../models/Employee/WorkEmployeeInfo';

@Injectable({
  providedIn: 'root'
})
export class WorkInfoService {
  public workInfo$ = new Subject<WorkEmployeeInfo>();
  constructor() { }

  public changeWorkInfo(data: WorkEmployeeInfo){
    this.workInfo$.next(data);
  }
}
