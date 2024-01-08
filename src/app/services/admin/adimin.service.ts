import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../classes/book';

@Injectable({
  providedIn: 'root'
})
export class AdiminService {
  private book = new Book('', '', '', '', '','', '', '', 0)
  private delBook = ''
  constructor(private http: HttpClient) { }

  setTitle(value: string){
    this.book.title = value
  }
  setSurname(value: string){
    this.book.surname = value
  }
  setIsbn(value: string){
    this.book.isbn = value
  }
  setGenre(value: string){
    this.book.genre = value
  }
  setState(value: string){
    this.book.state = value
  }
  setPosition(value: string){
    this.book.position = value
  }
  setLanguage(value: string){
    this.book.language = value
  }
  setCopies(value: string){
    this.book.copies = parseInt(value)
  }

  setIsbnRem(value: string){
    this.delBook = value
  }

  addBook(){
    var i = 1
    if(this.book.isbn==='')
      i = i*2
    if(this.book.title==='')
      i = i*3
    if(this.book.surname==='')
      i = i*5
    if(this.book.language==='')
      i = i*7
    if(this.book.position==='')
      i = i*11
    if(this.book.copies=0)
      i = i*13
    if(this.book.genre==='')
      i = i*17
    if(i===1){
      this.http.post('http://localhost:23456/registrazione-libro',this.book).subscribe(response => {
        var tmp = JSON.parse(JSON.stringify(response))
        console.log(tmp.toString())
      }).unsubscribe()
    }
    return i
  }
  removeBook(){
    if(this.delBook!==''){
      return 0
    }else{
      this.http.delete('http://localhost:23456/deleteLibri/'+this.delBook).subscribe(response => {
        var tmp = JSON.parse(JSON.stringify(response))
        console.log(tmp.toString())
      }).unsubscribe()
      return 1
    }
  }
}
