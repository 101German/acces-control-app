import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { EventLog } from "src/app/models/EventLog/EventLog";
import { FilterItem } from "src/app/models/Filters/FilterItem";
import { EventLogService } from "src/app/services/event-log.service";

@Component({
  selector: "app-event-logs",
  templateUrl: "./event-logs.component.html",
  styleUrls: ["./event-logs.component.css"],
})
export class EventLogsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public passId: number;
  public displayedColumns: string[] = [
    "RoomName",
    "RoomNumber",
    "EmployeeName",
    "PassId",
    "DateAccess",
  ];
  public dataSource = new MatTableDataSource<EventLog>();

  constructor(private readonly eventLogService: EventLogService) {}

  ngOnInit(): void {
    this.eventLogService.getEventLogs().subscribe((eventLogs) => {
      this.dataSource = new MatTableDataSource<EventLog>(eventLogs);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit(): void {}

  search() {
    this.eventLogService.searchEventLogs(this.passId).subscribe((eventLogs)=>{
      this.dataSource = new MatTableDataSource<EventLog>(eventLogs);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
