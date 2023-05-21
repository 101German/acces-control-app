import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { FilterItem } from "src/app/models/Filters/FilterItem";
import { Place } from "src/app/models/Place/Place";
import { WorkRoom } from "src/app/models/WorkRoom/WorkRoom";
import { WorkroomService } from "src/app/services/workroom.service";
import { CreateWorkroomComponent } from "../dialogs/create-workroom/create-workroom.component";
import { JwtService } from "src/app/services/jwt.service";

@Component({
  selector: "app-places",
  templateUrl: "./places.component.html",
  styleUrls: ["./places.component.css"],
})
export class PlacesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  public workRoomNumber: number;
  public displayedColumns: string[] = ["roomName", "roomNumber", "division"];
  public dataSource = new MatTableDataSource<WorkRoom>();

  constructor(
    private workRoomService: WorkroomService,
    public dialog: MatDialog,
    public jwtService: JwtService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.workRoomService.getWorkRooms().subscribe((data) => {
      this.dataSource = new MatTableDataSource<WorkRoom>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  addNewWorkRoom() {
    this.dialog.open(CreateWorkroomComponent, {
      height: "500px",
      width: "600px",
    });
  }

  search(){
    this.workRoomService.searchWorkRooms(this.workRoomNumber, 0).subscribe((workrooms)=>{
      this.dataSource = new MatTableDataSource<WorkRoom>(workrooms);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
