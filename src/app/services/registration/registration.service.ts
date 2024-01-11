import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private user = {
    Username: '',
    Email: '',
    NameUser: '',
    SurnameUser: '',
    Password: '',
  }
  getUser(){
    return this.user
  }
  private confirmpw = false

  constructor() { }
  setUsername(value: string) {
    this.user.Username = value
  }
  setEmail(value: string) {
    if (value.toLocaleLowerCase().match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')) {
      this.user.Email = value
      return true
    } else {
      return false
    }
  }
  setSurname(value: string) {
    this.user.SurnameUser = value
  }
  setName(value: string) {
    this.user.NameUser = value
  }
  setPassword(value: string) {
    this.user.Password = value
  }
  setConfirmPassword(value: string) {
    this.confirmpw = this.user.Password === value
    return this.confirmpw
  }
  tryRegister() {
    var i = 1;
    if (this.user.Username === '')
      i = i * 2
    if (this.user.Email === '')
      i = i * 3
    if (this.user.NameUser === '')
      i = i * 5
    if (this.user.SurnameUser === '')
      i = i * 7
    if (this.user.Password === '')
      i = i * 11
    if (!this.confirmpw)
      i = i * 13
    return i;
  }
}
