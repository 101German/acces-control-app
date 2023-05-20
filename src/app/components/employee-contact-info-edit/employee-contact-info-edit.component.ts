import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeContactInfo } from 'src/app/models/Employee/EmployeeContactInfo';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-contact-info-edit',
  templateUrl: './employee-contact-info-edit.component.html',
  styleUrls: ['./employee-contact-info-edit.component.css']
})
export class EmployeeContactInfoEditComponent {
public employeeId: number;

public mobilePhone: string;
public email: string;
public workSpace: string;

constructor(private employeeService: EmployeeService,
  private route: ActivatedRoute){
}

ngOnInit(): void {
  this.employeeId = Number(this.route.parent?.snapshot.paramMap.get('id'));
  console.log("Num ", this.employeeId )
  this.employeeService.getEmployee(this.employeeId ).subscribe((employee) => {
    this.mobilePhone = employee.mobilePhone;
    this.email = employee.email;
    this.workSpace = employee.workSpace;
  })
}

public submit(){
  const empInfo = new EmployeeContactInfo();
  empInfo.mobilePhone = this.mobilePhone;
  empInfo.email = this.email;
  empInfo.workSpace = this.workSpace;
  this.employeeService.updateEmployeeContactInfo(empInfo,this.employeeId).subscribe((response) => {});
}
}
