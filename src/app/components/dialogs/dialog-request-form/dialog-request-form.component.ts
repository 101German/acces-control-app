import { Component,  Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RequestForCreate } from 'src/app/models/Request/RequestForCreate';
import { JwtService } from 'src/app/services/jwt.service';
import { RequestService } from 'src/app/services/request.service';

export interface DialogData {
  empId:string;
}

@Component({
  selector: 'app-dialog-request-form',
  templateUrl: './dialog-request-form.component.html',
  styleUrls: ['./dialog-request-form.component.css']
})
export class DialogRequestFormComponent {
  public title: string;
  public description: string;
  constructor(
    public dialogRef: MatDialogRef<DialogRequestFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private requestService: RequestService,
    private jwtService: JwtService,
  ) {}

  create(){
    const userId = this.jwtService.getId();
    console.log("dialog ",userId)
    const request = new RequestForCreate(this.title,this.description, userId)
    console.log("dialog ",request)
    this.requestService.createRequest(request).subscribe(()=>{
    this.dialogRef.close();
    alert("Request was created");
   });
  }

  close(): void{
    this.dialogRef.close();
  }
}
