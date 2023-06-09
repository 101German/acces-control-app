import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ContractStatusEnum } from "src/app/enums/ContractStatusEnum";
import { ProbationStatusEnum } from "src/app/enums/ProbationStatusEnum";
import { TypeOfWorkEnum } from "src/app/enums/TypeOfWorkEnum";
import { WorkEmployeeInfo } from "src/app/models/Employee/WorkEmployeeInfo";
import { EmployeeService } from "src/app/services/employee.service";
import { WorkInfoService } from "src/app/services/work-info.service";

@Component({
  selector: "app-employee-work-info-edit",
  templateUrl: "./employee-work-info-edit.component.html",
  styleUrls: ["./employee-work-info-edit.component.css"],
})
export class EmployeeWorkInfoEditComponent {
  public employeeId: number = 0;

  public hiringDate: string = "";
  public probationEndDate: string = "";
  public contractStartDate: string = "";
  public contractEndDate: string = "";
  public probationStatus: string = "";
  public contractStatus: string = "";
  public typeOfWork: string = "";

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private workInfoService: WorkInfoService
  ) {}

  ngOnInit(): void {
    this.employeeId = Number(this.route.parent?.snapshot.paramMap.get("id"));
    if (this.employeeId !== 0) {
      this.employeeService
        .getEmployee(this.employeeId)
        .subscribe((employee) => {
          this.hiringDate = this.formatDate(employee.hiringDate);
          this.probationEndDate = this.formatDate(employee.probationEndDate);
          this.contractStartDate = this.formatDate(employee.contractStartDate);
          this.contractEndDate = this.formatDate(employee.contractEndDate);
          this.probationStatus = ProbationStatusEnum[employee.probationStatus];
          this.contractStatus = ContractStatusEnum[employee.contractStatus];
          this.typeOfWork = TypeOfWorkEnum[employee.typeOfWork];
        });
    }
  }

  submit() {
    const empInfo = new WorkEmployeeInfo();
    empInfo.hiringDate = new Date(this.hiringDate);
    empInfo.probationEndDate = new Date(this.probationEndDate);
    empInfo.contractStartDate = new Date(this.contractStartDate);
    empInfo.contractEndDate = new Date(this.contractEndDate);
    empInfo.probationStatus = ProbationStatusEnum[this.probationStatus];
    empInfo.contractStatus = ContractStatusEnum[this.contractStatus];
    empInfo.typeOfWork = TypeOfWorkEnum[this.typeOfWork];
    if (this.employeeId !== 0) {
      this.employeeService
        .updateEmployeeWorkInfo(empInfo, this.employeeId)
        .subscribe((response) => {
          alert("Data was saved");
        });
    } else {
      this.workInfoService.changeWorkInfo(empInfo);
      this.router.navigate(['create-employee','contact-info'])
    }
  }

  formatDate(date) {
    var formatDate = new Date(date);
    return formatDate.toISOString().slice(0, 10);
  }
}
