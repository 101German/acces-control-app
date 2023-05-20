import { ContractStatusEnum } from "src/app/enums/ContractStatusEnum";
import { ProbationStatusEnum } from "src/app/enums/ProbationStatusEnum"
import { TypeOfWorkEnum } from "src/app/enums/TypeOfWorkEnum";

export class WorkEmployeeInfo{
    public hiringDate: Date;
    public probationEndDate: Date;
    public contractStartDate: Date;
    public contractEndDate: Date;
    public probationStatus: ProbationStatusEnum;
    public contractStatus: ContractStatusEnum;
    public typeOfWork: TypeOfWorkEnum;
}