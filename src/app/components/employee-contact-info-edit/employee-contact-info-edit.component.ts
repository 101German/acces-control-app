import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { EmployeeContactInfo } from "src/app/models/Employee/EmployeeContactInfo";
import { ContactInfoService } from "src/app/services/contact-info.service";
import { CreateUserService } from "src/app/services/create-user.service";
import { EmployeeService } from "src/app/services/employee.service";
import { CreateUserFormComponent } from "../dialogs/create-user-form/create-user-form.component";

@Component({
  selector: "app-employee-contact-info-edit",
  templateUrl: "./employee-contact-info-edit.component.html",
  styleUrls: ["./employee-contact-info-edit.component.css"],
})
export class EmployeeContactInfoEditComponent {
  public employeeId: number;

  public mobilePhone: string = "";
  public email: string = "";
  public workSpace: string = "";

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private contactInfoService: ContactInfoService,
    private createUserService: CreateUserService,
    public dialog: MatDialog  
  ) {}

  ngOnInit(): void {
    this.employeeId = Number(this.route.parent?.snapshot.paramMap.get("id"));
    if (this.employeeId !== 0) {
      this.employeeService
        .getEmployee(this.employeeId)
        .subscribe((employee) => {
          this.mobilePhone = employee.mobilePhone;
          this.email = employee.email;
          this.workSpace = employee.workSpace;
        });
    }
  }

  public submit() {
    const empInfo = new EmployeeContactInfo();
    empInfo.mobilePhone = this.mobilePhone;
    empInfo.email = this.email;
    empInfo.workSpace = this.workSpace;
    if (this.employeeId !== 0) {
      this.employeeService
        .updateEmployeeContactInfo(empInfo, this.employeeId)
        .subscribe((response) => {
          alert("Data was saved");
        });
    } else {
      this.contactInfoService.changeContactInfo(empInfo);
      const dialogRef = this.dialog.open(CreateUserFormComponent, {
        height: "400px",
        width: "600px",
      }); 
      //this.createUserService.create(true);
    }
  }
}
