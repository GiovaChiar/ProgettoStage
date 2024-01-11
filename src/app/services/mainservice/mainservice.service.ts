import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Injectable, OnInit } from '@angular/core';
import {Book} from '../../classes/book'
import { ComponentFixtureNoNgZone } from '@angular/core/testing';
import { Console } from 'console';
import { response } from 'express';
import { User } from '../../classes/user';
import { type } from 'os';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService{
  private allBooks!: Book[]
  private loanBooks !: Book[]
  constructor() { }

  getBook(value: string){
    var book !: Book
    this.allBooks.forEach(element => {
      if(parseInt(element.ISBN)===parseInt(value))
        book = element
    });
    console.log(book)
    return book
  }
  getLoanBoolsks(value: string){
    var book !: Book
    this.loanBooks.forEach(element => {
      if(parseInt(element.ISBN)===parseInt(value))
        book = element
    });
    console.log(book)
    return book
  }
  getAllBooks(){
    return this.allBooks
  }
  getLoanBooks(){
    return this.loanBooks
  }
  setAllBooks(value: Book[]){
    this.allBooks = value
  }
  setLoanBooks(value: Book[]){
    this.loanBooks = value
  }
  sortCall(value: number){
    if(value===1)
      this.sort(this.allBooks)
    else
      this.sort(this.loanBooks)
  }
  private sort(value: Book[]){
    value.sort((a,b)=>{return a.Title.localeCompare(b.Title)})
  }
  getByGenre(value: string){
    var ret: Book[]
    ret = []
    this.allBooks.forEach(book=>{
      if(book.Type===value)
        ret.push(book)
    })
    this.sort(ret)
    return ret
  }
  getByAuthor(value: string){
    var ret: Book[]
    ret = []
    this.allBooks.forEach(book=>{
      if(book.SurnameWriter.match(RegExp('^'+value)))
        ret.push(book)
    })
    this.sort(ret)
    return ret
  }
  getByTitle(value: string){
    var ret: Book[]
    ret = []
    this.allBooks.forEach(book=>{
      if(book.Title.match(RegExp('^'+value)))
        ret.push(book)
    })
    this.sort(ret)
    return ret
  }
  rentBook(value: string){
    const ver = JSON.parse(JSON.stringify(localStorage.getItem('user')))
    var val = {
      BookISBN: value,
      userIdUser: ver
    }
    return val
  }
  giveBack(value: string){
    const ver = JSON.parse(JSON.stringify(localStorage.getItem('user')))
    var val = {
      BookISBN: value,
      userIdUser: ver
    }
    return val
  }
}


