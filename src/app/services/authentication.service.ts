import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'express';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user = {
    email: '',
    passsword: '',
  }
  constructor(private http: HttpClient) { }
  setUsername(value: string){
    this.user.email = value
  }
  setPassword(value: string){
    this.user.passsword = value
  }
  tryLogin(){
    if(this.user.email === '' && this.user.passsword === ''){
      console.log("missing both");
    }else if(this.user.passsword === ''){
      console.log("missing password");
    }else if(this.user.email === ''){
      console.log("missing username");
    }else{
      this.http.post('http://localhost:4000',this.user)
      localStorage.setItem('user',JSON.stringify(this.user))
    }
  }
}
