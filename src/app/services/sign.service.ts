import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../models/Token';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  private url = "https://localhost:7194/Auth/"

  constructor(private http: HttpClient) { }

  login(login: string, password: string) : Observable<Token> {
    const body = {
      userLogin: login,
      password: password
    }
    return this.http.post<Token>(this.url+"login", body);
  }

  register(login: string, password: string){
    const body = {
      userLogin: login,
      password: password
    }
    return this.http.post(this.url+"register", body);
  }

}
