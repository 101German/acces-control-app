import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogData } from "../dialog-request-form/dialog-request-form.component";
import { RegisterInfoService } from "src/app/services/register-info.service";
import { EmployeeRegisterInfo } from "src/app/models/Employee/EmployeeRegisterInfo";

@Component({
  selector: "app-create-user-form",
  templateUrl: "./create-user-form.component.html",
  styleUrls: ["./create-user-form.component.css"],
})
export class CreateUserFormComponent {
  public login: string = "";
  public password: string = "";
  public role: string = "";
  constructor(
    public dialogRef: MatDialogRef<CreateUserFormComponent>,
    private registerInfoService: RegisterInfoService
  ) {}

  create() {
    const emp = new EmployeeRegisterInfo()
    emp.login = this.login;
    emp.password = this.password;
    emp.role = this.role;
    this.registerInfoService.changeRegisterInfo(emp);
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }
}
