import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Token } from "src/app/models/Token";
import { SignService } from "src/app/services/sign.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"],
  providers: [SignService],
})
export class SignInComponent {
  public userLogin: string;
  public password: string;
  constructor(private signService: SignService, private router: Router) {}

  login() {
    this.signService
      .login(this.userLogin, this.password)
      .subscribe((data: Token) => {
        console.log(data.value);
        sessionStorage.setItem("access_token", data.value);
        this.router.navigate([''])
      },
      (error)=>{alert("Incorect credentials")});
  }
}
