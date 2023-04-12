import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-personal-info-edit',
  templateUrl: './employee-personal-info-edit.component.html',
  styleUrls: ['./employee-personal-info-edit.component.css']
})
export class EmployeePersonalInfoEditComponent {
  public imgSrc = "../../../assets/user.png";
 public onChangeFile(event: any){
  if(event.target.files.length > 0 ){
    let reader = new FileReader();
    const file = event.target.files[0];
    if(file.type == 'image/png' || file.type == 'image/jpeg'){
    reader.readAsDataURL(file);
    reader.onload = (event:any) =>{
      this.imgSrc = event.target.result;
    }
    const formData = new FormData();
    formData.append('file', file);
  }
  else{
    alert("Wrong file format")
  }
  }
}
}
