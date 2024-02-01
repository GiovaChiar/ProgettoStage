import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { json, response } from 'express';
import { HttpClientModule } from '@angular/common/http';
import { REPL_MODE_SLOPPY } from 'node:repl';
import { User } from '../../classes/user';
import { time, timeStamp } from 'node:console';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnDestroy {
  private user = new User('','','')
  constructor() { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  private sub: Subscription | undefined
  setEmail(value: string){
    if(value.toLocaleLowerCase().match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')){
      this.user.Email = value
      return true
    }else{
      return false
    }
  }
  getUser(){
    return this.user
  }
  setUsername(value: string){
    this.user.Username = value
    return true
  }
  setPassword(value: string){
    this.user.Password = value
  }
  tryLogin(){
    if((this.user.Email === '' && this.user.Username==='') && this.user.Password === ''){
      return 0;
    }else if(this.user.Password === ''){
      return 1;
    }else if(this.user.Email === '' && this.user.Username===''){
      return 2;
    }else {
      return 4;
    }
  }
}
