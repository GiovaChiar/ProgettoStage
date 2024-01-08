import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Injectable, OnInit } from '@angular/core';
import {Book} from '../../classes/book'
import { ComponentFixtureNoNgZone } from '@angular/core/testing';
import { Console } from 'console';
import { response } from 'express';
import { User } from '../../classes/user';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService{
  private catInitied = false
  private allBooks = [
    new Book('0000000000000','Titolo','Nome','Cognome', 'Genere','Position','Lingua','Stato',0),
  ]
  constructor(private http: HttpClient) { }

  getBook(value: string){
    var book !: Book
    this.allBooks.forEach(element => {
      if(element.isbn === value)
        book = element
    });
    console.log(book)
    return book
  }
  getAllBooks(){
    if(!this.catInitied){
    this.http.get('http://localhost:23456/listaLibri').subscribe(response=>{
      console.log(response)
      var tmp = JSON.parse(JSON.stringify(response))
      tmp.forEach((el: { ISBN: string; Titolo: string; NomeAutore: string; CognomeAutore: string; Genere: string; PosizioneInLibreria: string; Lingua: string; })=>{
        this.allBooks.push(new Book(el.ISBN,el.Titolo,el.NomeAutore,el.CognomeAutore,el.Genere,el.PosizioneInLibreria,el.Lingua,'Disponibile',1))
      })
    })
      this.catInitied = true
    }
    this.sort(this.allBooks)
    return this.allBooks
  }
  private sort(value: Book[]){
    value.sort((a,b)=>{return a.title.localeCompare(b.title)})
  }
  getByGenre(value: string){
    var ret: Book[]
    ret = []
    this.allBooks.forEach(book=>{
      if(book.genre===value)
        ret.push(book)
    })
    this.sort(ret)
    return ret
  }
  getByAuthor(value: string){
    var ret: Book[]
    ret = []
    this.allBooks.forEach(book=>{
      if(book.surname.match(RegExp('^'+value)))
        ret.push(book)
    })
    this.sort(ret)
    return ret
  }
  getBystate(value: string){
    var ret: Book[]
    ret = []
    this.allBooks.forEach(book=>{
      if(book.state===value)
        ret.push(book)
    })
    this.sort(ret)
    return ret
  }
  getByTitle(value: string){
    var ret: Book[]
    ret = []
    this.allBooks.forEach(book=>{
      if(book.title.match(RegExp('^'+value)))
        ret.push(book)
    })
    this.sort(ret)
    return ret
  }
  rentBook(value: string){
    const ver = JSON.parse(JSON.stringify(localStorage.getItem('user')))
    var val = {
      isbn: value,
      idUtenti: ver
    }
    this.http.post('http://localhost:23456/AggiuntaPrestiti',val)
  }
  giveBack(value: string){
    const ver = JSON.parse(JSON.stringify(localStorage.getItem('user')))
    var val = {
      isbn: value,
      idUtenti: ver
    }
    this.http.post('http://localhost:23456/AggiuntaPrestiti',val)
  }
}


