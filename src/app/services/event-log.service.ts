import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { EventLog } from "../models/EventLog/EventLog";

@Injectable({
  providedIn: "root",
})
export class EventLogService {
  private url: string = "https://localhost:7194/EventLog";
  constructor(private http: HttpClient) {}

  getEventLogs() {
    return this.http.get<EventLog[]>(this.url);
  }

  searchEventLogs(passId: number) {
    if(passId == undefined){
      passId = 0;
    }
    let params = new HttpParams().set("passId", passId);
    return this.http.get<EventLog[]>(this.url + "/SearchEventLogs", {
      params: params,
    });
  }
}
