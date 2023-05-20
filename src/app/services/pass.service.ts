import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pass } from "../models/Pass/Pass";

@Injectable({
  providedIn: "root",
})
export class PassService {
  private url = "https://localhost:7194/Pass/";
  constructor(private http: HttpClient) {}

  getPass(empId: number) {
    let params = new HttpParams().set("empId", empId);
    return this.http.get<Pass>(this.url, { params: params });
  }
}
