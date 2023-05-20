import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Employee } from "src/app/models/Employee/Employee";
import { FilterItem } from "src/app/models/Filters/FilterItem";
import { MatSort, Sort } from "@angular/material/sort";
import { EmployeeService } from "src/app/services/employee.service";
import { JobTitleEnum } from "src/app/enums/JobTitleEnum";
import { ProfessionalLevelEnum } from "src/app/enums/ProfessionalLevelEnum";
import { ConvertEnumToStringHelperService } from "src/app/helpers/convert-enum-to-string-helper.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-employees-page",
  templateUrl: "./employees-page.component.html",
  styleUrls: ["./employees-page.component.css"],
})
export class EmployeesPageComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public placeholderStr = "first and last name";
  public filterList: FilterItem[] = [
    {
      id: 1,
      name: "Manager level",
      options: [
        { label: "M1", value: 1 },
        { label: "M2", value: 2 },
        { label: "M3", value: 3 },
      ],
    },
    {
      id: 2,
      name: "Manager level",
      options: [
        { label: "M1", value: 1 },
        { label: "M2", value: 2 },
        { label: "M3", value: 3 },
      ],
    },
    {
      id: 3,
      name: "Manager level",
      options: [
        { label: "M1", value: 1 },
        { label: "M2", value: 2 },
        { label: "M3", value: 3 },
      ],
    },
    {
      id: 4,
      name: "Manager level",
      options: [
        { label: "M1", value: 1 },
        { label: "M2", value: 2 },
        { label: "M3", value: 3 },
      ],
    },
  ];

  public employees: Employee[];

  public displayedColumns: string[] = [
    "name",
    "jobTitle",
    "profLevel",
    "hiringDate",
  ];
  public dataSource = new MatTableDataSource<Employee>();
  constructor(
    private employeeService: EmployeeService,
    public enumToStringHelperService: ConvertEnumToStringHelperService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Employee>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

 public goToCreateEmployee(){
this.router.navigate(['create-employee'])
  }
}
