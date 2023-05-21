import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { ConvertEnumToStringHelperService } from 'src/app/helpers/convert-enum-to-string-helper.service';
import { Employee } from 'src/app/models/Employee/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public employee: Employee = new Employee();
  constructor(private oauthService: OAuthService,
   private router: Router,
   private employeeService: EmployeeService,
   private jwtService: JwtService,
   public enumToStringHelperService: ConvertEnumToStringHelperService) { }

  public logout(){
    sessionStorage.clear();
    this.router.navigate(['sign-in']);
  }

  ngOnInit(): void {
    let userId = this.jwtService.getId();
    this.employeeService.getEmployeeByUserId(userId).subscribe((emp)=> {
      this.employee = emp;
    })
  }

}
