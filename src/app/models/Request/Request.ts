import { RequestStatusEnum } from "src/app/enums/RequestStatusEnum";

export class Request {
    public id: number;
    public employeeName: string;
    public employeeId: string;
    public title: string;
    public description: string;
    public createdDate: Date;
    public status: RequestStatusEnum;
}