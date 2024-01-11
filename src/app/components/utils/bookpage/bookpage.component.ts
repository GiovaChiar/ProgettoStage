import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../../classes/book';
import { ActivatedRoute, ParamMap, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MainserviceService } from '../../../services/mainservice/mainservice.service';
import { parseArgs } from 'util';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from 'express';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bookpage',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive,],
  templateUrl: './bookpage.component.html',
  styleUrl: './bookpage.component.scss'
})
export class BookpageComponent implements OnInit,OnDestroy{
  book !: Book
  private sub!: Subscription
  constructor(private route: ActivatedRoute, private mainservice: MainserviceService, private http: HttpClient){}
  private subhttp: Subscription | undefined
  ngOnDestroy(): void {
    this.sub.unsubscribe()
    this.subhttp?.unsubscribe()
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
    this.subhttp = this.http.post('http://localhost:23456/addLoan',this.mainservice.rentBook(this.book.ISBN)).subscribe(response=>{
      var tmp = JSON.parse(JSON.stringify(response))
      console.log(tmp)})
  }
  giveBackBook(){
    const c = this.mainservice.giveBack(this.book.ISBN)
    this.subhttp = this.http.delete('http://localhost:23456/deleteLoan/'+c.BookISBN+'/'+c.userIdUser).subscribe(response=>{
      var tmp = JSON.parse(JSON.stringify(response))
      console.log(tmp)})
      window.location.reload();
  }
}
