import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "src/app/models/Employee/Employee";
import { EmployeePersonalInfo } from "../models/Employee/EmployeePersonalInfo";
import { WorkEmployeeInfo } from "../models/Employee/WorkEmployeeInfo";
import { EmployeeContactInfo } from "../models/Employee/EmployeeContactInfo";
import { EmployeeRegisterInfo } from "../models/Employee/EmployeeRegisterInfo";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  private url = "https://localhost:7194/Employee";

  constructor(private http: HttpClient) {}

  getEmployee(id: number) {
    return this.http.get<Employee>(this.url + "/" + id);
  }
  getEmployees() {
    return this.http.get<Employee[]>(this.url);
  }

  updateEmployeePesonalInfo(employee: EmployeePersonalInfo, id: number) {
    const body = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      jobTitle: employee.jobTitle,
      professionalLevel: employee.professionalLevel,
      location: employee.location,
      address: employee.address,
      division: employee.division,
      englishLevel: employee.englishLevel,
    };
    return this.http.patch(this.url + "/update-personal-info/" + id, body);
  }

  updateEmployeeWorkInfo(employee: WorkEmployeeInfo, id: number) {
    const body = {
      hiringDate: employee.hiringDate,
      probationEndDate: employee.probationEndDate,
      contractStartDate: employee.contractStartDate,
      contractEndDate: employee.contractEndDate,
      probationStatus: employee.probationStatus,
      contractStatus: employee.contractStatus,
      typeOfWork: employee.typeOfWork,
    };
    return this.http.patch(this.url + "/update-work-info/" + id, body);
  }

  updateEmployeeContactInfo(employee: EmployeeContactInfo, id: number) {
    const body = {
      mobilePhone: employee.mobilePhone,
      email: employee.email,
      workSpace: employee.workSpace,
    };
    return this.http.patch(this.url + "/update-contact-info/" + id, body);
  }

  getEmployeeIdByUserId(userId: string) {
    const params = new HttpParams().set("userId", userId);
    return this.http.get<number>(this.url + "/GetEmployeeIdByUserId", {
      params: params,
    });
  }

  getEmployeeByUserId(userId: string) {
    const params = new HttpParams().set("userId", userId);
    return this.http.get<Employee>(this.url + "/GetEmployeeByUserId", {
      params: params,
    });
  }

  createEmployee(
    personalInfo: EmployeePersonalInfo,
    workInfo: WorkEmployeeInfo,
    contactInfo: EmployeeContactInfo,
    registerInfo: EmployeeRegisterInfo
  ) {
    const body = {
      personalInfo: personalInfo,
      workInfo: workInfo,
      contactInfo: contactInfo,
      registerInfo: registerInfo,
    };

    console.log("reg info ", registerInfo);
    return this.http.post(this.url + "/CreateEmployee", body);
  }

  getEmployeesByWorkRoomId(workRoomId: number) {
    return this.http.get<Employee[]>(
      this.url + "/GetEmployeesByWorkRoomId/" + workRoomId
    );
  }

  searchEmployees(searchString: string, workRoomId: number) {
    let params = new HttpParams().set("searchString", searchString);
    console.log("WRID ", workRoomId);
    if (workRoomId != 0) {
      params = params
        .set("workRoomId", workRoomId)
        .set("searchString", searchString);
      console.log("PARAMS ", params);
    }
    return this.http.get<Employee[]>(this.url + "/SearchEmployees", {
      params: params,
    });
  }
}
