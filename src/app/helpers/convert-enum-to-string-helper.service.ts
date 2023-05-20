import { Injectable } from '@angular/core';
import { JobTitleEnum } from '../enums/JobTitleEnum';
import { ProfessionalLevelEnum } from '../enums/ProfessionalLevelEnum';
import { ContractStatusEnum } from '../enums/ContractStatusEnum';
import { EnglishLevelEnum } from '../enums/EnglishLevelEnum';
import { ProbationStatusEnum } from '../enums/ProbationStatusEnum';
import { TypeOfWorkEnum } from '../enums/TypeOfWorkEnum';
import { RequestStatusEnum } from '../enums/RequestStatusEnum';

@Injectable({
  providedIn: 'root'
})
export class ConvertEnumToStringHelperService {

  constructor() { }

  jobTitleEnumToString(jobTitle: JobTitleEnum){
    return JobTitleEnum[jobTitle];
  }

  proffLevelEnumToString(profLevel: ProfessionalLevelEnum){
    return ProfessionalLevelEnum[profLevel];
  }

  contractStatusEnumToString(contractStatus: ContractStatusEnum){
    return ContractStatusEnum[contractStatus];
  }

  englishLevelEnumToString(englishLevel: EnglishLevelEnum){
    return EnglishLevelEnum[englishLevel];
  }

  probationStatusEnumToString(probationStatus: ProbationStatusEnum){
    return ProbationStatusEnum[probationStatus];
  }

  typeOfWorkEnumToString(typeOfWork: TypeOfWorkEnum){
    return TypeOfWorkEnum[typeOfWork];
  }

  requestStatusToEnum(requestStatus: RequestStatusEnum){
    return RequestStatusEnum[requestStatus];
  }
}
