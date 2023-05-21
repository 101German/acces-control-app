import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { WorkRoom } from "../models/WorkRoom/WorkRoom";
import { WorkRoomForCreate } from "../models/WorkRoom/WorkRoomForCreate";
import { WorkRoomForEdit } from "../models/WorkRoom/WorkRoomForEdit";

@Injectable({
  providedIn: "root",
})
export class WorkroomService {
  private url = "https://localhost:7194/WorkRoom";

  constructor(private http: HttpClient) {}

  getWorkRooms() {
    return this.http.get<WorkRoom[]>(this.url);
  }

  getWorkRoom(id: number) {
    return this.http.get<WorkRoom>(this.url + `/${id}`);
  }

  getWorkRoomsByEmployeeId(employeeId: number) {
    let params = new HttpParams().set("empId", employeeId);
    return this.http.get<WorkRoom[]>(this.url + "/GetWorkRoomsByEmployeeId", {
      params: params,
    });
  }

  getWorkRoomsByPassId(passId: number) {
    let params = new HttpParams().set("passId", passId);
    return this.http.get<WorkRoom[]>(this.url + "/GetWorkRoomsByPassId", {
      params: params,
    });
  }

  getWorkRoomNumbers() {
    return this.http.get<number[]>(this.url + "/GetWorkRoomNumbers");
  }

  createWorkRoom(workRoom: WorkRoomForCreate) {
    const body = {
      name: workRoom.name,
      roomNumber: workRoom.roomNumber,
      division: workRoom.division,
      floor: workRoom.floor,
    };
    return this.http.post(this.url, body);
  }

  editWorkRoom(workRoom: WorkRoomForEdit, workRoomId: number) {
    const body = {
      name: workRoom.name,
      roomNumber: workRoom.roomNumber,
      division: workRoom.division,
      floor: workRoom.floor,
    };

    return this.http.put(this.url + "/EditWorkRoom/" + workRoomId, body);
  }

  searchWorkRooms(roomNumber: number, employeeId: number) {
    if(roomNumber == undefined){
      roomNumber = 0;
    }
    let params = new HttpParams().set("roomNumber", roomNumber);
    if (employeeId != 0) {
      params = params
        .set("employeeId", employeeId)
        .set("roomNumber", roomNumber);
      console.log("PARAMS ", params);
    }
    return this.http.get<WorkRoom[]>(this.url + "/SearchWorkRooms", {
      params: params,
    });
  }
}
