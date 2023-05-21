import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { Employee } from "src/app/models/Employee/Employee";
import { FilterItem } from "src/app/models/Filters/FilterItem";
import { Pass } from "src/app/models/Pass/Pass";
import { Place } from "src/app/models/Place/Place";
import { WorkRoom } from "src/app/models/WorkRoom/WorkRoom";
import { EmployeeService } from "src/app/services/employee.service";
import { PassService } from "src/app/services/pass.service";
import { WorkroomService } from "src/app/services/workroom.service";
import { CreatePassComponent, PassInfo } from "../dialogs/create-pass/create-pass.component";
import { JwtService } from "src/app/services/jwt.service";

@Component({
  selector: "app-employee-pass-page",
  templateUrl: "./employee-pass-page.component.html",
  styleUrls: ["./employee-pass-page.component.css"],
})
export class EmployeePassPageComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public pass: Pass;
  public employee: Employee = new Employee();
  public isBlocked: boolean;
  public searchNumber: number;
  public displayedColumns: string[] = [
    "roomName",
    "roomNumber",
    "floor",
    "division",
  ];
  public dataSource = new MatTableDataSource<WorkRoom>();

  constructor(
    private passService: PassService,
    private route: ActivatedRoute,
    private workRoomSerive: WorkroomService,
    public dialog: MatDialog,
    private employeeService: EmployeeService,
    public jwtService: JwtService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.employeeService.getEmployee(id).subscribe((emp) => {
      this.employee = emp;
    });
    console.log("EMP id ", id);
    this.passService.getPassByEmpId(id).subscribe((data) => {
      this.pass = data;
      this.isBlocked = this.pass.isBlocked;
      this.workRoomSerive
        .getWorkRoomsByPassId(this.pass.id)
        .subscribe((workRooms) => {
          this.dataSource = new MatTableDataSource<WorkRoom>(workRooms);
        });
    });
    // this.workRoomSerive.getWorkRoomsByEmployeeId(id).subscribe((workRooms) => {
    //   console.log("WR ", workRooms)
    //   this.dataSource = new MatTableDataSource<WorkRoom>(workRooms);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });
  }

  ngAfterViewInit(): void {}

  block() {
    this.passService.block(this.pass.id).subscribe(() => {
      this.passService.getPassByEmpId(this.employee.id).subscribe((pass) => {
        this.pass = pass;
        this.isBlocked = this.pass.isBlocked;
      });
    });
  }

  unblock() {
    this.passService.unblock(this.pass.id).subscribe(() => {
      this.passService.getPassByEmpId(this.employee.id).subscribe((pass) => {
        this.pass = pass;
        this.isBlocked = this.pass.isBlocked;
      });
    });
  }

  edit() {
    let passInfo = new PassInfo();
    passInfo.passId = this.pass.id;
    passInfo.approvedBy = this.pass.approvedBy;
    passInfo.employeeId = this.employee.id;
    passInfo.expiredDate = this.pass.expiredDate;
    passInfo.woorkRoomNumbers = this.pass.workRoomNumbers;
    passInfo.edit = true;
    const dialogRef = this.dialog.open(CreatePassComponent, {
      data: passInfo,
      height: "400px",
      width: "600px",
    });;
  }

  public search(){
    this.workRoomSerive.searchWorkRooms(this.searchNumber, this.employee.id).subscribe((workRooms)=>{
      this.dataSource = new MatTableDataSource<WorkRoom>(workRooms);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
