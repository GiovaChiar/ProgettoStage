import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookMaskComponent } from "../../utils/book-mask/book-mask.component";
import { MainserviceService } from '../../../services/mainservice/mainservice.service';
import { ActivatedRoute,  RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {Book} from '../../../classes/book'
import { InputTileComponent } from "../../utils/input-tile/input-tile.component";
import { BookpageComponent } from '../../utils/bookpage/bookpage.component';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/internal/Subscription';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-catalogue',
    standalone: true,
    templateUrl: './catalogue.component.html',
    styleUrl: './catalogue.component.scss',
    imports: [CommonModule, BookMaskComponent, NgbDropdownModule, BookMaskComponent, BookpageComponent, RouterOutlet, RouterLink, RouterLinkActive, InputTileComponent]
})
export class CatalogueComponent implements OnInit, OnDestroy{
  books !: Book[]
  selectedBook !: Book
  field = 'Title'
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  private sub: Subscription | undefined
  constructor(private mainService: MainserviceService, private route: ActivatedRoute, private http: HttpClient){}
  ngOnInit(): void {
    this.books = this.mainService.getAllBooks(); 
    if(this.books === undefined){
      this.books =[] 
      this.sub = this.http.get('http://localhost:23456/BookList').subscribe(response=>{
        var tmp = JSON.parse(JSON.stringify(response))
        console.log(tmp)
        tmp.forEach((el: { ISBN: string; Title: string; NameWriter: string; SurnameWriter: string; Type: string; LocationInLibrary: string; Language: string;NumberOfCopies: number;createdAt: Date;})=>{
          this.books.push(new Book(el.ISBN,el.Title,el.NameWriter,el.SurnameWriter,el.Type,el.LocationInLibrary,el.Language,el.NumberOfCopies,undefined))
        })
        this.mainService.setAllBooks(this.books)
      })
    }
  }
  searchByTitle(value: string){
    this.books = this.mainService.getByTitle(value);
  }
  searchByAuthor(value: string){
    this.books = this.mainService.getByAuthor(value);
  }
  searchByGenre(value: string){
    this.books = this.mainService.getByGenre(value)
  }
  sort(){
    this.mainService.sortCall(1)
    this.books = this.mainService.getAllBooks()
  }
  changeField(value: string){
    this.field = value
  }
}
