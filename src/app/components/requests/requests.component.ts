import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { FilterItem } from "src/app/models/Filters/FilterItem";
import { Request } from "src/app/models/Request/Request";
import { DialogRequestFormComponent } from "../dialogs/dialog-request-form/dialog-request-form.component";
import { JwtService } from "src/app/services/jwt.service";
import { RequestService } from "src/app/services/request.service";
import { ConvertEnumToStringHelperService } from "src/app/helpers/convert-enum-to-string-helper.service";

@Component({
  selector: "app-requests",
  templateUrl: "./requests.component.html",
  styleUrls: ["./requests.component.css"],
})
export class RequestsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  employeeName: string = "";
  
  public displayedColumns: string[] = [
    "Title",
    "Desctription",
    "EmployeeName",
    "CreationDate",
    "Status",
  ];
  public dataSource = new MatTableDataSource<Request>();

  constructor(
    public dialog: MatDialog,
    private jwtService: JwtService,
    private requestService: RequestService,
    public enumHelperService: ConvertEnumToStringHelperService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogRequestFormComponent, {
      data: { empId: "dagfkdlqkeg" },
      height: "400px",
      width: "600px",
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.jwtService.isAdmin()) {
      this.requestService.getAllRequests().subscribe((requests) => {
        this.dataSource = new MatTableDataSource<Request>(requests);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } else {
      let userId = this.jwtService.getId();
      this.requestService.getRequests(userId).subscribe((requests) => {
        this.dataSource = new MatTableDataSource<Request>(requests);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  }

  search(){
    this.requestService.searchRequests(this.employeeName).subscribe((requests) => {
      this.dataSource = new MatTableDataSource<Request>(requests);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}

// const EVENT_DATA: Request[]=[
//  { id: 1, empId:"dfadgsgs", empName: "John Sina", title: "Change pass", description: "pass does't work", creationDate: new Date("10/04/2023"), status: "pending"},
//  { id: 1, empId:"dfadgsgs", empName: "John Sina", title: "Change pass", description: "pass does't work", creationDate: new Date("10/04/2023"), status: "pending"},
//  { id: 1, empId:"dfadgsgs", empName: "John Sina", title: "Change pass", description: "pass does't work", creationDate: new Date("10/04/2023"), status: "pending"},
//  { id: 1, empId:"dfadgsgs", empName: "John Sina", title: "Change pass", description: "pass does't work", creationDate: new Date("10/04/2023"), status: "pending"},
//  { id: 1, empId:"dfadgsgs", empName: "John Sina", title: "Change pass", description: "pass does't work", creationDate: new Date("10/04/2023"), status: "pending"},
//  { id: 1, empId:"dfadgsgs", empName: "John Sina", title: "Change pass", description: "pass does't work", creationDate: new Date("10/04/2023"), status: "pending"},
//  { id: 1, empId:"dfadgsgs", empName: "John Sina", title: "Change pass", description: "pass does't work", creationDate: new Date("10/04/2023"), status: "pending"},
//  { id: 1, empId:"dfadgsgs", empName: "John Sina", title: "Change pass", description: "pass does't work", creationDate: new Date("10/04/2023"), status: "pending"},
//  { id: 1, empId:"dfadgsgs", empName: "John Sina", title: "Change pass", description: "pass does't work", creationDate: new Date("10/04/2023"), status: "pending"},
//  { id: 1, empId:"dfadgsgs", empName: "John Sina", title: "Change pass", description: "pass does't work", creationDate: new Date("10/04/2023"), status: "pending"},
//  { id: 1, empId:"dfadgsgs", empName: "John Sina", title: "Change pass", description: "pass does't work", creationDate: new Date("10/04/2023"), status: "pending"},
//  { id: 1, empId:"dfadgsgs", empName: "John Sina", title: "Change pass", description: "pass does't work", creationDate: new Date("10/04/2023"), status: "pending"},
//  { id: 1, empId:"dfadgsgs", empName: "John Sina", title: "Change pass", description: "pass does't work", creationDate: new Date("10/04/2023"), status: "pending"},
//  { id: 1, empId:"dfadgsgs", empName: "John Sina", title: "Change pass", description: "pass does't work", creationDate: new Date("10/04/2023"), status: "pending"},
//  { id: 1, empId:"dfadgsgs", empName: "John Sina", title: "Change pass", description: "pass does't work", creationDate: new Date("10/04/2023"), status: "pending"},
// ]
