import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json, response } from 'express';
import { HttpClientModule } from '@angular/common/http';
import { REPL_MODE_SLOPPY } from 'node:repl';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user = {
    username: '',
    email: '',
    password: '',
  }
  constructor(private http: HttpClient) { }
  setEmail(value: string){
    if(value.toLocaleLowerCase().match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')){
      this.user.email = value
      return true
    }else{
      return false
    }
  }
  setUsername(value: string){
    this.user.username = value
    return true
  }
  setPassword(value: string){
    this.user.password = value
  }
  tryLogin(){
    if((this.user.email === '' && this.user.username==='') && this.user.password === ''){
      return 0;
    }else if(this.user.password === ''){
      return 1;
    }else if(this.user.email === '' && this.user.username===''){
      return 2;
    }else{
      this.http.post('http://localhost:23456/login',this.user).subscribe(response => console.log(response.toString()))
      //comando che prende l'oggetto dal backend e lo trasforma in user
      localStorage.setItem('user',JSON.stringify(this.user))
      return 3;
    }
  }
}
