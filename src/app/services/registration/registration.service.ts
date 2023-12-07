import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private user = {
    username: '',
    email: '',
    name: '',
    surname: '',
    password: '',
  }
  private confirmpw = false

  constructor(private http: HttpClient) { }
  setUsername(value: string){
    this.user.username = value
  }
  setEmail(value: string){
    if(value.toLocaleLowerCase().match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')){
      this.user.email = value
      return true
    }else{
      return false
    }
  }
  setSurname(value: string){
    this.user.surname = value
  }
  setName(value: string){
    this.user.name = value
  }
  setPassword(value: string){
    this.user.password = value
  }
  setConfirmPassword(value: string){
    this.confirmpw = this.user.password === value
    return this.confirmpw
  }
  tryRegister(){
    var i = 1;
    if(this.user.username==='')
      i = i*2
    if(this.user.email==='')
      i = i*3
    if(this.user.name==='')
      i = i*5
    if(this.user.surname==='')
      i = i*7
    if(this.user.password==='')
      i = i*11
    if(!this.confirmpw)
      i = i*13
    if(i===1){
      //invio richista http
      if(false)
        i = i*17
      if(false)
        i = i*19
    }
    return i;
  }
}
