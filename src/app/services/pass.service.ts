import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pass } from "../models/Pass/Pass";
import { PassForCreate } from "../models/Pass/PassForCreate";
import { PassForEdit } from "../models/Pass/PassForEdit";

@Injectable({
  providedIn: "root",
})
export class PassService {
  private url = "https://localhost:7194/Pass/";
  constructor(private http: HttpClient) {}

  getPassByEmpId(empId: number) {
    let params = new HttpParams().set("empId", empId);
    return this.http.get<Pass>(this.url, { params: params });
  }

  createPass(pass: PassForCreate) {
    let body = {
      expiredDate: pass.expiredDate,
      approvedBy: pass.approvedBy,
      employeeId: pass.employeeId,
      workRoomNumbers: pass.workRoomNumbers,
    };
    return this.http.post(this.url, body);
  }

  block(passId: number) {
    const body = {
      passId: passId,
    };
    return this.http.patch(this.url + "Block/" + passId, body);
  }

  unblock(passId: number) {
    const body = {
      passId: passId,
    };
    return this.http.patch(this.url + "Unblock/" + passId, body);
  }

  editPass(pass: PassForEdit, passId: number) {
    const body = {
      expiredDate: pass.expiredDate,
      approvedBy: pass.approvedBy,
      workRoomNumbers: pass.workRoomNumbers
    };

    return this.http.put(this.url + "EditPass/" + passId, body)
  }
}
