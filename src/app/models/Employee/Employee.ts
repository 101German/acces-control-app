import { ContractStatusEnum } from "src/app/enums/ContractStatusEnum";
import { EnglishLevelEnum } from "src/app/enums/EnglishLevelEnum";
import { JobTitleEnum } from "src/app/enums/JobTitleEnum";
import { ProbationStatusEnum } from "src/app/enums/ProbationStatusEnum";
import { ProfessionalLevelEnum } from "src/app/enums/ProfessionalLevelEnum";
import { TypeOfWorkEnum } from "src/app/enums/TypeOfWorkEnum";

export class Employee{
    constructor(public id: string ="",
    public firstName: string = "",
    public lastName: string = "",
    public jobTitle:JobTitleEnum = 0,
    public division: string = "",
    public professionalLevel: ProfessionalLevelEnum = 0,
    public location: string = "",
    public address: string = "",
    public englishLevel: EnglishLevelEnum = 0,
    public hiringDate: Date = new Date(),
    public contractStatus: ContractStatusEnum = 0,
    public probationStatus: ProbationStatusEnum = 0,
    public typeOfWork: TypeOfWorkEnum = 0,
    public probationEndDate: Date = new Date(),
    public contractStartDate: Date = new Date(),
    public contractEndDate: Date = new Date(),
    public mobilePhone: string = "",
    public email: string = "",
    public workSpace: string = "") {}
}
