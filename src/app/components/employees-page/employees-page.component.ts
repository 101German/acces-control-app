import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/Employee/Employee';
import { FilterItem } from 'src/app/models/Filters/FilterItem';
import {MatSort, Sort} from '@angular/material/sort';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent implements OnInit, AfterViewInit {

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
public placeholderStr ="first and last name";
public filterList: FilterItem[] = [
  {id: 1, name:"Manager level", options: [
    {label: "M1", value:1},
    {label: "M2", value:2},
    {label: "M3", value:3}
  ]},
  {id: 2, name:"Manager level", options: [
    {label: "M1", value:1},
    {label: "M2", value:2},
    {label: "M3", value:3}
  ]},
  {id: 3, name:"Manager level", options: [
    {label: "M1", value:1},
    {label: "M2", value:2},
    {label: "M3", value:3}
  ]},
  {id: 4, name:"Manager level", options: [
    {label: "M1", value:1},
    {label: "M2", value:2},
    {label: "M3", value:3}
  ]}
]

public displayedColumns: string[]=["name","jobTitle","profLevel","managerLevel"]
public dataSource = new MatTableDataSource<Employee>(EMPLOYEE_DATA);
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

const EMPLOYEE_DATA: Employee[]=[
  {id:"3fjkdfa1",name:"Alex",jobTitle:"Developer",profLevel:"Senior",managerLevel:"M1"},
  {id:"3fjkdfa1",name:"John",jobTitle:"Developer",profLevel:"Senior",managerLevel:"M1"},
  {id:"3fjkdfa1",name:"John",jobTitle:"Developer",profLevel:"Senior",managerLevel:"M1"},
  {id:"3fjkdfa1",name:"John",jobTitle:"Developer",profLevel:"Senior",managerLevel:"M1"},
  {id:"3fjkdfa1",name:"John",jobTitle:"Developer",profLevel:"Senior",managerLevel:"M1"},
  {id:"3fjkdfa1",name:"John",jobTitle:"Developer",profLevel:"Senior",managerLevel:"M1"},
  {id:"3fjkdfa1",name:"John",jobTitle:"Developer",profLevel:"Senior",managerLevel:"M1"}
]
