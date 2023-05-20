import { Component, OnInit, OnChanges } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit, OnChanges {
  public employeeId: number = 0;
 constructor(private jwtService:JwtService, private employeeService: EmployeeService) {
 }
  ngOnInit(): void {
    let userId = this.jwtService.getId();
    console.log("User id ", userId)
    this.employeeService.getEmployeeIdByUserId(userId).subscribe((empId)=>{
      console.log("EMP ", empId)
      this.employeeId = empId;
    })
  }
  ngOnChanges(){
    
  }
}
