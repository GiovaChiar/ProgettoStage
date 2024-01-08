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
  constructor(private http: HttpClient) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  private sub: Subscription | undefined
  setEmail(value: string){
    if(value.toLocaleLowerCase().match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')){
      this.user.email = value
      return true
    }else{
      return false
    }
  }
  getUser(){
    return this.user
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
      return 4;
    }
  }
}
