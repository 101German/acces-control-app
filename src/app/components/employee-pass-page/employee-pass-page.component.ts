import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FilterItem } from 'src/app/models/Filters/FilterItem';
import { Place } from 'src/app/models/Place/Place';

@Component({
  selector: 'app-employee-pass-page',
  templateUrl: './employee-pass-page.component.html',
  styleUrls: ['./employee-pass-page.component.css']
})
export class EmployeePassPageComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  placeholderStr ="room number..."
  filterList: FilterItem[] = [
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

  public displayedColumns: string[]=["roomName","roomNumber","division", "lastAccess"]
  public dataSource = new MatTableDataSource<Place>(PLACE_DATA);

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

const PLACE_DATA: EmployeeAccessiablePlace[]=[
  {id:1,roomName:"Work room",roomNumber:"728",division:".NET",lastAccessDate: new Date("10/03/2023").toISOString().replace("T"," ").replace("Z"," ").slice(0,19)},
  {id:1,roomName:"Work room",roomNumber:"728",division:".NET",lastAccessDate: new Date("10/03/2023").toISOString().replace("T"," ").replace("Z"," ").slice(0,19)},
  {id:1,roomName:"Work room",roomNumber:"728",division:".NET",lastAccessDate: new Date("10/03/2023").toISOString().replace("T"," ").replace("Z"," ").slice(0,19)},
  {id:1,roomName:"Work room",roomNumber:"728",division:".NET",lastAccessDate: new Date("10/03/2023").toISOString().replace("T"," ").replace("Z"," ").slice(0,19)},
  {id:1,roomName:"Work room",roomNumber:"728",division:".NET",lastAccessDate: new Date("10/03/2023").toISOString().replace("T"," ").replace("Z"," ").slice(0,19)},
  {id:1,roomName:"Work room",roomNumber:"728",division:".NET",lastAccessDate: new Date("10/03/2023").toISOString().replace("T"," ").replace("Z"," ").slice(0,19)},
  {id:1,roomName:"Work room",roomNumber:"728",division:".NET",lastAccessDate: new Date("10/03/2023").toISOString().replace("T"," ").replace("Z"," ").slice(0,19)},
]

class EmployeeAccessiablePlace extends Place{
public lastAccessDate : string;
} 
