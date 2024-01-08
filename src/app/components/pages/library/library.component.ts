import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainserviceService } from '../../../services/mainservice/mainservice.service';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BookMaskComponent } from "../../utils/book-mask/book-mask.component";
import {Book} from '../../../classes/book'
import { BookpageComponent } from '../../utils/bookpage/bookpage.component';
import { InputTileComponent } from '../../utils/input-tile/input-tile.component';

@Component({
    selector: 'app-library',
    standalone: true,
    templateUrl: './library.component.html',
    styleUrl: './library.component.scss',
    imports: [CommonModule, BookMaskComponent, BookpageComponent, RouterOutlet, RouterLink, RouterLinkActive, InputTileComponent]
})
export class LibraryComponent implements OnInit {
  books!: Book[]
  constructor(private mainService: MainserviceService){}
  ngOnInit(): void {
    this.books = this.mainService.getAllBooks(); 
  }
  searchByTitle(value: string){
    this.books = this.mainService.getByTitle(value);
  }
  searchByAuthor(value: string){
    this.books = this.mainService.getByAuthor(value);
  }
}
