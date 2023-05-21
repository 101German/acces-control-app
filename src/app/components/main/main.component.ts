import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  isAdmin: boolean = false;
constructor(private jwtService: JwtService){}
  ngOnInit(): void {
    this.isAdmin = this.jwtService.getRole() === "admin" ? true : false;
  }
}
