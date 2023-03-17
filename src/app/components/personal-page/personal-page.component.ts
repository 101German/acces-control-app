import { Component, OnInit } from '@angular/core';
import { ContactInfo } from 'src/app/models/ContactInfo';
import { Employee } from 'src/app/models/Employee';
import { PersonalInfo } from 'src/app/models/PersonalInfo';
import { WorkInfo } from 'src/app/models/WorkInfo';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {

  employee!: Employee

  constructor(private employeeService: EmployeeService) {
   }

  ngOnInit(): void {
   this.employeeService.getEmployee().subscribe({next: (data: any)=> {
    console.log("data ", data)
    this.employee = new Employee(data.id,
    data.mobilePhone,
    data.email,
    data.workspace,
    data.jobTitle,
    data.division,
    data.profLevel,
    data.location,
    data.address,
    data.englishLevel,
    data.lastCheck,
    data.hiringDate,
    data.workPeriod,
    data.isPassProbation,
    data.contractStatus,
    data.typeOfWork,
    data.probationEndDate,
    data.contractStartDate,
    data.contractEndDate)}});
  }

}
