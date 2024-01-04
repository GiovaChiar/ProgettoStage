import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';

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
  setUsername(value: string) {
    this.user.username = value
  }
  setEmail(value: string) {
    if (value.toLocaleLowerCase().match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')) {
      this.user.email = value
      return true
    } else {
      return false
    }
  }
  setSurname(value: string) {
    this.user.surname = value
  }
  setName(value: string) {
    this.user.name = value
  }
  setPassword(value: string) {
    this.user.password = value
  }
  setConfirmPassword(value: string) {
    this.confirmpw = this.user.password === value
    return this.confirmpw
  }
  tryRegister() {
    var i = 1;
    if (this.user.username === '')
      i = i * 2
    if (this.user.email === '')
      i = i * 3
    if (this.user.name === '')
      i = i * 5
    if (this.user.surname === '')
      i = i * 7
    if (this.user.password === '')
      i = i * 11
    if (!this.confirmpw)
      i = i * 13
    if (i === 1) {
      var res
      this.http.post('http://localhost:23456/registrazione', this.user).subscribe(response => {
        console.log(JSON.stringify(response))
        var tmp = JSON.parse(JSON.stringify(response))
        if (tmp.username !== '')
          i = i * 17
        if (tmp.email !== '')
          i = i * 19
      })
    }
    return i;
  }
}
