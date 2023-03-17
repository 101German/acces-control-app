export class WorkInfo{
    constructor(public userId: number,
        public hiringDate: Date,
        public workPeriod: string,
        public isPassProbation: boolean,
        public contractStatus: string,
        public typeOfWork: string,
        public probationEndDate: Date,
        public contractStartDate: Date,
        public contractEndDate: Date){}
}

export enum ProbationStatusEnum{
    completed = 0,
    notcompleted = 1
}

export enum ContractStatusEnum{
    current = 0,
    extended = 1,
    terminated = 3
}

export enum WorkTypeEnum{
    office = 0,
    remotely,
    mixed
}