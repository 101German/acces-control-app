import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { FilterItem } from "src/app/models/Filters/FilterItem";
import { Pass } from "src/app/models/Pass/Pass";
import { Place } from "src/app/models/Place/Place";
import { WorkRoom } from "src/app/models/WorkRoom/WorkRoom";
import { PassService } from "src/app/services/pass.service";
import { WorkroomService } from "src/app/services/workroom.service";

@Component({
  selector: "app-employee-pass-page",
  templateUrl: "./employee-pass-page.component.html",
  styleUrls: ["./employee-pass-page.component.css"],
})
export class EmployeePassPageComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public pass: Pass;

  placeholderStr = "room number...";
  filterList: FilterItem[] = [
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

  public displayedColumns: string[] = [
    "roomName",
    "roomNumber",
    "division",
  ];
  public dataSource = new MatTableDataSource<WorkRoom>();

  constructor(
    private passService: PassService,
    private route: ActivatedRoute,
    private workRoomSerive: WorkroomService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    console.log("EMP id ", id);
    this.passService.getPass(id).subscribe((data) => {
      this.pass = data;
      this.workRoomSerive.getWorkRoomsByPassId(this.pass.id).subscribe((workRooms) => {
        this.dataSource = new MatTableDataSource<WorkRoom>(workRooms)
      })
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
