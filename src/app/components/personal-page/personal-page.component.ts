import { Component, Input, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/services/employee.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from "src/app/models/Employee/Employee";
import { ContractStatusEnum } from "src/app/enums/ContractStatusEnum";
import { ConvertEnumToStringHelperService } from "src/app/helpers/convert-enum-to-string-helper.service";
import { Pass } from "src/app/models/Pass/Pass";
import { PassService } from "src/app/services/pass.service";
import { MatDialog } from "@angular/material/dialog";
import { CreatePassComponent, PassInfo } from "../dialogs/create-pass/create-pass.component";
import { JwtHelperService } from "@auth0/angular-jwt";
import { JwtService } from "src/app/services/jwt.service";

@Component({
  selector: "app-personal-page",
  templateUrl: "./personal-page.component.html",
  styleUrls: ["./personal-page.component.css"],
})
export class PersonalPageComponent implements OnInit {
  @Input() employeeId: number = 0;
  contractStatuses: ContractStatusEnum;
  employee: Employee = new Employee();
  public pass: Pass | null = null;

  constructor(
    private employeeService: EmployeeService,
    private passService: PassService,
    private route: ActivatedRoute,
    private router: Router,
    public enumToStringHelperService: ConvertEnumToStringHelperService,
    public dialog: MatDialog,
    public jwtService: JwtService
  ) {}

  ngOnInit(): void {
    let id;
    if (this.employeeId != 0) {
      id = this.employeeId;
    } else {
      id = Number(this.route.snapshot.paramMap.get("id"));
    }
    console.log("Id: ", id);
    this.employeeService.getEmployee(id).subscribe((data) => {
      console.log(data);
      this.employee = data;
    });
    this.passService.getPassByEmpId(id).subscribe((res) => {
      this.pass = res;
    });
  }

  goToEditEmployee() {
    this.router.navigate(["employees", this.employee?.id, "edit"]);
  }

  goToPassEmployee() {
    console.log("GO to pass")
    this.router.navigate(["employees", this.employee?.id, "pass"]);
  }

  createPass(){
    var passInfo = new PassInfo();
    passInfo.employeeId = this.employee.id;
    const dialogRef = this.dialog.open(CreatePassComponent, {
      data: passInfo,
      height: "400px",
      width: "600px",
    });
  }
}
