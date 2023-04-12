export class Employee{
    constructor(public employeeId: number,
        public mobilePhone: string,
        public email: string,
        public workspace: string,
        public jobTitle: string = " ",
        public division: string,
        public profLevel: string,
        public location: string,
        public address: string,
        public engLevel: string,
        public lastEngCheck: string,
        public hiringDate: Date,
        public workPeriod: string,
        public isPassProbation: boolean,
        public contractStatus: string,
        public typeOfWork: string,
        public probationEndDate: Date,
        public contractStartDate: Date,
        public contractEndDate: Date){
        }
}