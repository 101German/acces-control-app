import { Component, Pipe, PipeTransform } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EnglishLevelEnum } from "src/app/enums/EnglishLevelEnum";
import { JobTitleEnum } from "src/app/enums/JobTitleEnum";
import { ProfessionalLevelEnum } from "src/app/enums/ProfessionalLevelEnum";
import { EmployeePersonalInfo } from "src/app/models/Employee/EmployeePersonalInfo";
import { EnumToArrayPipe } from "src/app/pipes/EnumToArrayPipe";
import { EmployeeService } from "src/app/services/employee.service";

@Component({
  selector: "app-employee-personal-info-edit",
  templateUrl: "./employee-personal-info-edit.component.html",
  styleUrls: ["./employee-personal-info-edit.component.css"],
})
export class EmployeePersonalInfoEditComponent {
profLevels:ProfessionalLevelEnum;

  public employeeId: number;

  public imgSrc = "../../../assets/user.png";
  public firstName: string ="";
  public lastName: string = "";
  public address: string = "";
  public division: string = "";
  public englishLevel: string = "";
  public jobTitle: string = "";
  public location: string = "";
  public professionalLevel: string = "";

  constructor(private employeeService: EmployeeService,
     private route: ActivatedRoute){
  }
  
  ngOnInit(): void {
    this.employeeId = Number(this.route.parent?.snapshot.paramMap.get('id'));
    console.log("Num ", this.employeeId )
    if(this.employeeId !== 0){
    this.employeeService.getEmployee(this.employeeId ).subscribe((employee) => {
      this.firstName = employee.firstName;
      this.lastName = employee.lastName;
      this.address = employee.address;
      this.division = employee.division;
      this.englishLevel = EnglishLevelEnum[employee.englishLevel];
      this.jobTitle = JobTitleEnum[employee.jobTitle];
      this.location = employee.location;
      this.professionalLevel = ProfessionalLevelEnum[employee.professionalLevel];
    })
  }
  }


  public onChangeFile(event: any) {
    if (event.target.files.length > 0) {
      let reader = new FileReader();
      const file = event.target.files[0];
      if (file.type == "image/png" || file.type == "image/jpeg") {
        reader.readAsDataURL(file);
        reader.onload = (event: any) => {
          this.imgSrc = event.target.result;
        };
        const formData = new FormData();
        formData.append("file", file);
      } else {
        alert("Wrong file format");
      }
    }
  }

  public submit(){
    const empInfo = new EmployeePersonalInfo();
    empInfo.firstName = this.firstName;
    empInfo.lastName = this.lastName;
    empInfo.address = this.address;
    empInfo.division =  this.division;
    empInfo.englishLevel = EnglishLevelEnum[this.englishLevel];
    empInfo.jobTitle = JobTitleEnum[this.jobTitle];
    empInfo.location = this.location;
    empInfo.professionalLevel = ProfessionalLevelEnum[this.professionalLevel]
    console.log(empInfo.professionalLevel)
    this.employeeService.updateEmployeePesonalInfo(empInfo,this.employeeId).subscribe((response) => {});
  }
}
