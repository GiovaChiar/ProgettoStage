import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'express';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user = {
    username: '',
    passsword: '',
  }
  constructor(private http: HttpClient) { }
  setUsername(value: string){
    this.user.username = value
  }
  setPassword(value: string){
    this.user.passsword = value
  }
  tryLogin(){
    if(this.user.username === '' && this.user.passsword === ''){
      console.log("missing both");
    }else if(this.user.passsword === ''){
      console.log("missing password");
    }else if(this.user.username === ''){
      console.log("missing username");
    }else{
      this.http.post('http://localhost:4000',this.user)
      localStorage.setItem('user',JSON.stringify(this.user))
    }
  }
}
