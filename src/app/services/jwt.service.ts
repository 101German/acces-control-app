import { Injectable, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class JwtService implements OnInit {

  constructor(private jwtHelper: JwtHelperService) { }
  ngOnInit(): void {
 
  }

  public getName(){
   console.log("Token ", this.jwtHelper.decodeToken())
   let name = this.jwtHelper.decodeToken()?.name;
   return name;
  }
  public getId(){
    let id = this.jwtHelper.decodeToken()?.id;
    return id;
  }
}
