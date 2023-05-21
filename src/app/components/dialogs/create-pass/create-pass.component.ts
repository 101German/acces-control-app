import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PassForCreate } from 'src/app/models/Pass/PassForCreate';
import { PassForEdit } from 'src/app/models/Pass/PassForEdit';
import { PassService } from 'src/app/services/pass.service';
import { WorkroomService } from 'src/app/services/workroom.service';

export class PassInfo{
  passId: number;
  employeeId: number;
  woorkRoomNumbers: number[];
  approvedBy: string;
  expiredDate: Date;
  edit: boolean = false;
}

@Component({
  selector: 'app-create-pass',
  templateUrl: './create-pass.component.html',
  styleUrls: ['./create-pass.component.css']
})
export class CreatePassComponent implements OnInit {
  public workRoomNumbers: number[] = [];
  public selectedRoomNumbers: number[] = [];
  public employeeId: number = 0;
  public approvedBy: string;
  public expiredDate: string;
  public isEdit: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<CreatePassComponent>,
    private readonly workRoomService: WorkroomService,
    private readonly passService: PassService,
    @Inject(MAT_DIALOG_DATA) public data: PassInfo,
  ) {
   
  }
  ngOnInit(): void {
    this.selectedRoomNumbers = this.data.woorkRoomNumbers;
    this.employeeId = this.data.employeeId;
    this.approvedBy = this.data.approvedBy;
    this.expiredDate = this.formatDate(this.data.expiredDate);
    this.isEdit = this.data.edit;
    this.workRoomService.getWorkRoomNumbers().subscribe((res) => {
      this.workRoomNumbers = res;
    })
  }

  create(){
    let pass = new PassForCreate();
    pass.approvedBy = this.approvedBy;
    pass.expiredDate = new Date(this.expiredDate);
    pass.employeeId = this.employeeId;
    pass.workRoomNumbers = this.selectedRoomNumbers;
    this.passService.createPass(pass).subscribe((res) => {
      this.dialogRef.close();
    });
  }

  edit(){
    let pass = new PassForEdit();
    pass.approvedBy = this.approvedBy;
    pass.expiredDate = new Date(this.expiredDate);
    pass.workRoomNumbers = this.selectedRoomNumbers;

    this.passService.editPass(pass, this.data.passId).subscribe(()=>{

    })
  }

  close(){
    this.dialogRef.close();
  }

  formatDate(date) {
    var formatDate = new Date(date);
    return formatDate.toISOString().slice(0, 10);
  }
}
