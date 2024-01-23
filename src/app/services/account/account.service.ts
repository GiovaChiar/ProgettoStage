import { Injectable, OnInit } from '@angular/core';
import { Book } from '../../classes/book';
import { User } from '../../classes/user';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { info } from 'console';
import { Info } from '../../classes/info';

@Injectable({
  providedIn: 'root'
})
export class AccountService{
  private passwordRem = false
  private password = ''
  private confirmPW = false
  constructor() { }
  logout(){
    localStorage.removeItem('user')
    localStorage.removeItem('info')
  }
 /*verifyPassoword(value: string){
    var ver!: User
    ver = JSON.parse(JSON.stringify(localStorage.getItem('user')))
    this.passwordRem = ver.password === value
    return this.passwordRem
  }*/
  setPassword(value: string) {
    this.password = value
  }
  setConfirmPassword(value: string) {
    this.confirmPW = this.password === value
    return this.confirmPW
  }
  changePassword(){
    if(this.passwordRem && !this.confirmPW)
      return 1
    else if(this.passwordRem)
      return 2
    else if(!this.confirmPW)
      return 3
    else{
      return 4
    }
  }
  public getPassword(){
    return this.password
  }
  public getInfo(){
   const vel =  JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('info'))))
   console.log(vel)
   return new Info( vel.Username, vel.Email, vel.NameUser,vel.SurnameUser)
  }
}
