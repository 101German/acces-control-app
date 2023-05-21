import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RequestForCreate } from "../models/Request/RequestForCreate";
import { Request } from "../models/Request/Request";

@Injectable({
  providedIn: "root",
})
export class RequestService {
  private url = "https://localhost:7194/Request";

  constructor(private http: HttpClient) {}

  createRequest(request: RequestForCreate) {
    const body = {
      title: request.title,
      description: request.description,
      userId: request.userId,
    };
    return this.http.post(this.url, body);
  }

  getRequests(userId: number) {
    const params = new HttpParams().set("userId", userId);
    return this.http.get<Request[]>(this.url, { params: params });
  }

  getAllRequests() {
    return this.http.get<Request[]>(this.url + "/GetAllRequests");
  }

  searchRequests(empName: string) {
    let params = new HttpParams().set("empName", empName);
    return this.http.get<Request[]>(this.url + "/SearchRequests", {
      params: params,
    });
  }
}
