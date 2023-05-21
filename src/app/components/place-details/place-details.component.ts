import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { ConvertEnumToStringHelperService } from "src/app/helpers/convert-enum-to-string-helper.service";
import { Employee } from "src/app/models/Employee/Employee";
import { FilterItem } from "src/app/models/Filters/FilterItem";
import { WorkRoom } from "src/app/models/WorkRoom/WorkRoom";
import { EmployeeService } from "src/app/services/employee.service";
import { WorkroomService } from "src/app/services/workroom.service";
import { EditWorkRoomComponent, InfoForEditWorkRoom } from "../dialogs/edit-work-room/edit-work-room.component";
import { JwtService } from "src/app/services/jwt.service";

@Component({
  selector: "app-place-details",
  templateUrl: "./place-details.component.html",
  styleUrls: ["./place-details.component.css"],
})
export class PlaceDetailsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public workRoom: WorkRoom = new WorkRoom();
  public employees: Employee[];
  public searchString: string = "";
  public displayedColumns: string[] = [
    "name",
    "jobTitle",
    "profLevel",
    "hiringDate",
  ];
  public dataSource = new MatTableDataSource<Employee>();

  constructor(
    private route: ActivatedRoute,
    private workRoomService: WorkroomService,
    private employeeService: EmployeeService,
    public convertEnumToStringHelperService: ConvertEnumToStringHelperService,
    public dialog: MatDialog,
    public jwtService: JwtService
  ) {}

  ngOnInit(): void {
    const workRoomId = Number(this.route.snapshot.paramMap.get("id"));
    this.workRoomService.getWorkRoom(workRoomId).subscribe((workRoom) => {
      this.workRoom = workRoom;
    });
    this.employeeService
      .getEmployeesByWorkRoomId(workRoomId)
      .subscribe((employees) => {
        console.log("EMP ", employees);
        this.dataSource = new MatTableDataSource<Employee>(employees);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  edit(){
    const infoForEditWorkRoom = new InfoForEditWorkRoom();
    infoForEditWorkRoom.workRoomId = this.workRoom.id;
    infoForEditWorkRoom.division = this.workRoom.division;
    infoForEditWorkRoom.floor = this.workRoom.floor;
    infoForEditWorkRoom.division = this.workRoom.division;
    infoForEditWorkRoom.name = this.workRoom.name;
    infoForEditWorkRoom.roomNumber = this.workRoom.roomNumber;
    this.dialog.open(EditWorkRoomComponent, {
      data: infoForEditWorkRoom,
      height: "500px",
      width: "600px",
    });
  }
  public search(){
    this.employeeService.searchEmployees(this.searchString,this.workRoom.id).subscribe((emps)=>{
      this.dataSource = new MatTableDataSource<Employee>(emps);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
