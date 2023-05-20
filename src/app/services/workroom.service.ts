import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkRoom } from '../models/WorkRoom/WorkRoom';

@Injectable({
  providedIn: 'root'
})
export class WorkroomService {

  private url = "https://localhost:7194/WorkRoom"

  constructor(private http: HttpClient) { }

  getWorkRooms(){
    return this.http.get<WorkRoom[]>(this.url);
  }

  getWorkRoom(id: number){
    return this.http.get<WorkRoom>(this.url + `/${id}`);
  }
  
  getWorkRoomsByEmployeeId(employeeId: number){
    let params = new HttpParams().set("empId", employeeId);
    return this.http.get<WorkRoom[]>(this.url + "/GetWorkRoomsByEmployeeId", {params: params})
  }

  getWorkRoomsByPassId(passId: number){
    let params = new HttpParams().set("passId", passId);
    return this.http.get<WorkRoom[]>(this.url + "/GetWorkRoomsByPassId", {params: params})
  }
}
