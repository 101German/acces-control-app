import { EnglishLevelEnum } from "src/app/enums/EnglishLevelEnum";
import { JobTitleEnum } from "src/app/enums/JobTitleEnum";
import { ProfessionalLevelEnum } from "src/app/enums/ProfessionalLevelEnum";

export class EmployeePersonalInfo{
        public firstName: string;
        public lastName: string;
        public jobTitle: JobTitleEnum;
        public professionalLevel: ProfessionalLevelEnum;
        public location: string;
        public address: string;
        public division: string;
        public englishLevel: EnglishLevelEnum;
}