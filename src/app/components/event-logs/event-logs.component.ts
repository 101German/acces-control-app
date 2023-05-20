import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EventLog } from 'src/app/models/EventLog/EventLog';
import { FilterItem } from 'src/app/models/Filters/FilterItem';

@Component({
  selector: 'app-event-logs',
  templateUrl: './event-logs.component.html',
  styleUrls: ['./event-logs.component.css']
})
export class EventLogsComponent implements AfterViewInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  placeholderStr ="room name..."
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
  public displayedColumns: string[]=["RoomName","RoomNumber","EmployeeName","PassId","DateAccess"];
  public dataSource = new MatTableDataSource<EventLog>();

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource<EventLog>(EVENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

const EVENT_DATA: EventLog[]=[
  {id:1,roomName:"Work room",placeId:1,roomNumber:"341",employeeName:"Stiv Matiu",passId:"kf14j351jd1jkwk",dateAccess: new Date("10/03/2023").toISOString().replace("T"," ").replace("Z"," ").slice(0,19)},
  {id:1,roomName:"Work room",placeId:1,roomNumber:"341",employeeName:"Stiv Matiu",passId:"kf14j351jd1jkwk",dateAccess: new Date("10/03/2023").toISOString().replace("T"," ").replace("Z"," ").slice(0,19)},
  {id:1,roomName:"Work room",placeId:1,roomNumber:"341",employeeName:"Stiv Matiu",passId:"kf14j351jd1jkwk",dateAccess: new Date("10/03/2023").toISOString().replace("T"," ").replace("Z"," ").slice(0,19)},
  {id:1,roomName:"Work room",placeId:1,roomNumber:"341",employeeName:"Stiv Matiu",passId:"kf14j351jd1jkwk",dateAccess: new Date("10/03/2023").toISOString().replace("T"," ").replace("Z"," ").slice(0,19)},
  {id:1,roomName:"Work room",placeId:1,roomNumber:"341",employeeName:"Stiv Matiu",passId:"kf14j351jd1jkwk",dateAccess: new Date("10/03/2023").toISOString().replace("T"," ").replace("Z"," ").slice(0,19)},
  {id:1,roomName:"Work room",placeId:1,roomNumber:"341",employeeName:"Stiv Matiu",passId:"kf14j351jd1jkwk",dateAccess: new Date("10/03/2023").toISOString().replace("T"," ").replace("Z"," ").slice(0,19)}
]