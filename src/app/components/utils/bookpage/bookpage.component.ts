import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../../classes/book';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MainserviceService } from '../../../services/mainservice/mainservice.service';
import { parseArgs } from 'util';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookpage.component.html',
  styleUrl: './bookpage.component.scss'
})
export class BookpageComponent implements OnInit,OnDestroy{
  book =  new Book('','','','','','','','',0)
  private sub!: Subscription
  constructor(private route: ActivatedRoute, private mainservice: MainserviceService){}

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((param: ParamMap)=>{
      var id = this.route.snapshot.paramMap.get('id')!
      this.book = this.mainservice.getBook(id)
    })
  }
  getLogin(){
    if (typeof localStorage !== 'undefined'){
      const ver = localStorage.getItem('user');
      if(!ver)
        return false
      else
        return true
    }else
      return false
  }
  rentBook(){
    this.mainservice.rentBook(this.book.isbn)
  }
  giveBackBook(){
    this.mainservice.giveBack(this.book.isbn)
  }
}
