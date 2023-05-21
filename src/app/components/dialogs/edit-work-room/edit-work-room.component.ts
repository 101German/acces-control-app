import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { WorkRoomForEdit } from "src/app/models/WorkRoom/WorkRoomForEdit";
import { WorkroomService } from "src/app/services/workroom.service";

export class InfoForEditWorkRoom {
  workRoomId: number;
  name: string = "";
  roomNumber: number;
  division: string = "";
  floor: number;
}

@Component({
  selector: "app-edit-work-room",
  templateUrl: "./edit-work-room.component.html",
  styleUrls: ["./edit-work-room.component.css"],
})
export class EditWorkRoomComponent implements OnInit {
  public name: string = "";
  public roomNumber: number;
  public division: string = "";
  public floor: number;
  constructor(
    public dialogRef: MatDialogRef<EditWorkRoomComponent>,
    private readonly workRoomService: WorkroomService,
    @Inject(MAT_DIALOG_DATA) public data: InfoForEditWorkRoom
  ) {}
  ngOnInit(): void {
    this.name = this.data.name;
    this.roomNumber = this.data.roomNumber;
    this.division = this.data.division;
    this.floor = this.data.floor;
  }
  edit() {
    let workRoom = new WorkRoomForEdit();
    workRoom.name = this.name;
    workRoom.division = this.division;
    workRoom.floor = this.floor;
    workRoom.roomNumber = this.roomNumber;
    this.workRoomService
      .editWorkRoom(workRoom, this.data.workRoomId)
      .subscribe(() => {});
  }
  close() {
    this.dialogRef.close();
  }
}
