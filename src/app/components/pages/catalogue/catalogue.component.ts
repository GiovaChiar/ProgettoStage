import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookMaskComponent } from "../../utils/book-mask/book-mask.component";
import { MainserviceService } from '../../../services/mainservice/mainservice.service';
import { ActivatedRoute,  RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {Book} from '../../../classes/book'
import { InputTileComponent } from "../../utils/input-tile/input-tile.component";
import { BookpageComponent } from '../../utils/bookpage/bookpage.component';

@Component({
    selector: 'app-catalogue',
    standalone: true,
    templateUrl: './catalogue.component.html',
    styleUrl: './catalogue.component.scss',
    imports: [CommonModule, BookMaskComponent, BookMaskComponent, BookpageComponent, RouterOutlet, RouterLink, RouterLinkActive, InputTileComponent]
})
export class CatalogueComponent implements OnInit{
  books !: Book[]
  selectedBook !: Book
  constructor(private mainService: MainserviceService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.books = this.mainService.getAllBooks(); 
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
}
