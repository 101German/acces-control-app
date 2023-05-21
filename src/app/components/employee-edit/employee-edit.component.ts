import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EmployeeContactInfo } from "src/app/models/Employee/EmployeeContactInfo";
import { EmployeePersonalInfo } from "src/app/models/Employee/EmployeePersonalInfo";
import { EmployeeRegisterInfo } from "src/app/models/Employee/EmployeeRegisterInfo";
import { WorkEmployeeInfo } from "src/app/models/Employee/WorkEmployeeInfo";
import { ContactInfoService } from "src/app/services/contact-info.service";
import { CreateUserService } from "src/app/services/create-user.service";
import { EmployeeService } from "src/app/services/employee.service";
import { PersonalInfoService } from "src/app/services/personal-info.service";
import { RegisterInfoService } from "src/app/services/register-info.service";
import { WorkInfoService } from "src/app/services/work-info.service";

@Component({
  selector: "app-employee-edit",
  templateUrl: "./employee-edit.component.html",
  styleUrls: ["./employee-edit.component.css"],
})
export class EmployeeEditComponent implements OnInit {
  private personalInfo: EmployeePersonalInfo;
  private workInfo: WorkEmployeeInfo;
  private contactInfo: EmployeeContactInfo;
  private registerInfo: EmployeeRegisterInfo;

  constructor(
    private readonly personalInfoService: PersonalInfoService,
    private readonly workInfoService: WorkInfoService,
    private readonly contactInfoService: ContactInfoService,
    private readonly employeeService: EmployeeService,
    private readonly registerInfoService: RegisterInfoService,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    this.personalInfoService.personalInfo$.subscribe((info) => {
      this.personalInfo = info;
      console.log(this.personalInfo);
    });
    this.workInfoService.workInfo$.subscribe((info) => {
      this.workInfo = info;
    });
    this.contactInfoService.contactInfo$.subscribe((info) => {
      this.contactInfo = info;
    });
    this.registerInfoService.registerInfo$.subscribe((info) => {
      this.registerInfo = info;
      this.employeeService
      .createEmployee(this.personalInfo, this.workInfo, this.contactInfo, this.registerInfo)
      .subscribe(() => {
        alert("Employee was created");
        this.router.navigate([''])
      });
    })
  }
}
