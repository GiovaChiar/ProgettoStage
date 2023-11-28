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
    if(value.toLocaleLowerCase().match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'))
      this.user.email = value
    else
      console.log('non è una mail')
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
