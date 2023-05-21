import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
  public create$ = new Subject<boolean>();
  constructor() { }

  public create(create: boolean){
    this.create$.next(create);
  }
}
