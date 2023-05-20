import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee/Employee';
import { ContractStatusEnum } from 'src/app/enums/ContractStatusEnum';
import { ConvertEnumToStringHelperService } from 'src/app/helpers/convert-enum-to-string-helper.service';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {
  @Input() employeeId: number = 0;
  contractStatuses: ContractStatusEnum;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
     private route: ActivatedRoute,
     private router: Router,
     public enumToStringHelperService: ConvertEnumToStringHelperService) {

   }

  ngOnInit(): void {
    let id;
    if(this.employeeId != 0){
      id = this.employeeId;
    }
    else{
      id = Number(this.route.snapshot.paramMap.get('id'));
    }
    console.log("Id: ", id)
    this.employeeService.getEmployee(id).subscribe((data) => {
      console.log(data);
      this.employee = data;
    })
  }

  goToEditEmployee(){
  this.router.navigate(['employees', this.employee?.id, 'edit'])
  }

  goToPassEmployee(){
    this.router.navigate(['employees', this.employee?.id, 'pass'])
  }

}
