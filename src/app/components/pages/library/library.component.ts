import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainserviceService } from '../../../services/mainservice/mainservice.service';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BookMaskComponent } from "../../utils/book-mask/book-mask.component";
import {Book} from '../../../classes/book'
import { BookpageComponent } from '../../utils/bookpage/bookpage.component';
import { InputTileComponent } from '../../utils/input-tile/input-tile.component';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
    selector: 'app-library',
    standalone: true,
    templateUrl: './library.component.html',
    styleUrl: './library.component.scss',
    imports: [CommonModule, BookMaskComponent, BookpageComponent, RouterOutlet, RouterLink, RouterLinkActive, InputTileComponent]
})
export class LibraryComponent implements OnInit, OnDestroy{
  books!: Book[]
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  private sub: Subscription | undefined
  constructor(private mainService: MainserviceService, private http: HttpClient){}
  ngOnInit(): void {
    this.books = this.mainService.getLoanBooks();
    if(this.books === undefined){
      this.books = []
      var userIdUser = {
        userIdUser: JSON.parse(JSON.stringify(localStorage.getItem('user')))
      }
      console.log(userIdUser)
      this.http.get('http://localhost:23456/LoanList/'+userIdUser.userIdUser).subscribe(response=>{
        console.log(response)
        var tmp = JSON.parse(JSON.stringify(response))
        tmp.forEach((el: { BookISBN: string; Book: {Title: string; NameWriter: string; SurnameWriter: string; Type: string; LocationInLibrary: string; Language: string;NumberOfCopies: number}})=>{
          this.books.push(new Book(el.BookISBN,/*'','','','','','',1*/el.Book.Title,el.Book.NameWriter,el.Book.SurnameWriter,el.Book.Type,el.Book.LocationInLibrary,el.Book.Language,el.Book.NumberOfCopies))
       })
       this.mainService.setLoanBooks(this.books)
      })
        }
  }
  searchByTitle(value: string){
    this.books = this.mainService.getByTitle(value);
  }
  searchByAuthor(value: string){
    this.books = this.mainService.getByAuthor(value);
  }
  sort(){
    this.mainService.sortCall(0)
    this.books = this.mainService.getLoanBooks()
  }
}
