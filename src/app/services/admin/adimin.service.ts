import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../classes/book';
import { User } from '../../classes/user';
import { Info } from '../../classes/info';
import { BookToAdd } from '../../classes/booktoAdd';

@Injectable({
  providedIn: 'root'
})
export class AdiminService{
  private book = new BookToAdd('', '', '', '', '','','',0)
  private delBook = ''
  private delUser = ''
  private users !: Info[]
  constructor(){}

  setTitle(value: string){
    this.book.Title = value
  }
  setSurname(value: string){
    this.book.SurnameWriter = value
  }
  setName(value: string){
    this.book.NameWriter = value
  }
  setIsbn(value: string){
    this.book.ISBN = value
  }
  setGenre(value: string){
    this.book.Type = value
  }
  setState(value: string){
    this.book.LocationInLibrary = value
  }
  setPosition(value: string){
    this.book.LocationInLibrary = value
  }
  setLanguage(value: string){
    this.book.Language = value
  }
  setCopies(value: string){
  this.book.NumberOfCopies = parseInt(value)
    console.log(this.book.NumberOfCopies)
}

  setIsbnRem(value: string){
    this.delBook = value
  }
  setUsers(value: Info[]){
    this.users = value
  }
  getDelBook(){
    return this.delBook
  }
  getBook(){
    return this.book
  }
  getDelUser(){
    return this.delUser
  }
  getUsers(){
    return this.users
  }
  addBook(){
    var i = 1
    if(this.book.ISBN==='')
      i = i*2
    if(this.book.Title==='')
      i = i*3
    if(this.book.SurnameWriter==='')
      i = i*5
    if(this.book.Language==='')
      i = i*7
    if(this.book.LocationInLibrary==='')
      i = i*11
    if(this.book.NumberOfCopies===0)
      i = i*13
    if(this.book.Type==='')
      i = i*17
    if(this.book.NameWriter==='')
      i = i*19
    return i
  }
  removeBook(){
    if(this.delBook===''){
      return 0
    }else{
      return 1
    }
  }
  searchUser(value: String){
    var ret: Info[]
    ret = []
    this.users.forEach(user=>{
      if(user.Username.match(RegExp('^'+value)))
        ret.push(user)
    })
    return ret
  }
}
