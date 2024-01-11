import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../classes/book';

@Injectable({
  providedIn: 'root'
})
export class AdiminService {
  private book = new Book('', '', '', '', '','', '', '', 0)
  private delBook = ''
  constructor() { }

  setTitle(value: string){
    this.book.Title = value
  }
  setSurname(value: string){
    this.book.SurnameWriter = value
  }
  setIsbn(value: string){
    this.book.ISBN = value
  }
  setGenre(value: string){
    this.book.Type = value
  }
  setState(value: string){
    this.book.state = value
  }
  setPosition(value: string){
    this.book.LocationInLibrary = value
  }
  setLanguage(value: string){
    this.book.Language = value
  }
  setCopies(value: string){
    this.book.NumberOfCopies = parseInt(value)
  }

  setIsbnRem(value: string){
    this.delBook = value
  }
  getDelBook(){
    return this.delBook
  }
  getBook(){
    return this.book
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
    if(this.book.NumberOfCopies=0)
      i = i*13
    if(this.book.Type==='')
      i = i*17
    return i
  }
  removeBook(){
    if(this.delBook!==''){
      return 0
    }else{
      return 1
    }
  }
}
