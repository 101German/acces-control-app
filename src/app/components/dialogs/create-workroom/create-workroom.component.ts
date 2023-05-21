import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { WorkRoom } from "src/app/models/WorkRoom/WorkRoom";
import { WorkRoomForCreate } from "src/app/models/WorkRoom/WorkRoomForCreate";
import { WorkroomService } from "src/app/services/workroom.service";

@Component({
  selector: "app-create-workroom",
  templateUrl: "./create-workroom.component.html",
  styleUrls: ["./create-workroom.component.css"],
})
export class CreateWorkroomComponent {
  public name: string = "";
  public roomNumber: number;
  public division: string = "";
  public floor: number;
  constructor(
    public dialogRef: MatDialogRef<CreateWorkroomComponent>,
    private readonly workRoomService: WorkroomService
  ) {}

  create() {
    let workRoom = new WorkRoomForCreate();
    workRoom.division = this.division;
    workRoom.floor = this.floor;
    workRoom.name = this.name;
    workRoom.roomNumber = this.roomNumber;
    this.workRoomService.createWorkRoom(workRoom).subscribe(() => {});
  }

  close() {
    this.dialogRef.close();
  }
}
