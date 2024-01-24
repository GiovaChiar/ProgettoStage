import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdiminService } from '../../../services/admin/adimin.service';
import { InputTileComponent } from "../../utils/input-tile/input-tile.component";
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { Subscription, combineLatest } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OnReadOpts } from 'net';
import { Info } from '../../../classes/info';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss',
    imports: [CommonModule, InputTileComponent]
})
export class AdminComponent implements  OnInit,OnDestroy{
  private sub: Subscription | undefined
  users !: Info[]
  constructor(private adminService: AdiminService, private http: HttpClient){}
 
  message = "missing field"
  messageIbs = "must be 13 digits"

  wrongIsbn = false
  messageIsbn = this.message

  wrongTitle = false
  wrongName = false
  wrongSurname = false
  wrongGerne = false
  wrongPosition = false
  wrongLanguage = false
  wrongCopies = false

  private getAllUser(){
    this.users = this.adminService.getUsers();
    if(this.users === undefined){
      this.users =[]
      this.sub = this.http.get('http://localhost:23456/UserList').subscribe(response=>{
        var tmp = JSON.parse(JSON.stringify(response))
        tmp.forEach((el: {idUser: string, Username: string, NameUser: string, SurnameUser: string, Email: string})=>{
          this.users.push(new Info(el.idUser,el.Username,el.Email,el.NameUser,el.SurnameUser,))
        })
        this.adminService.setUsers(this.users)
      })
    }
}

  ngOnInit(): void {
    this.getAllUser()
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  handleIsbn(value: string){
    this.adminService.setIsbn(value)
  }
  handleTitle(value: string){
    this.adminService.setTitle(value)
  }
  handleSurname(value: string){
    this.adminService.setSurname(value)
  }
  handleName(value: string){
    this.adminService.setName(value)
  }
  handleGenre(value: string){
    this.adminService.setGenre(value)
  }
  handleLanguage(value: string){
    this.adminService.setLanguage(value)
  }
  handleState(value: string){
    this.adminService.setState(value)
  }
  handleCopies(value: string){
    this.adminService.setCopies(value)
  }
  handlePosition(value: string){
    this.adminService.setPosition(value)
  }

  handleRemove(value: string){
    this.adminService.setIsbnRem(value)
  }
  addBook(){
    var val = this.adminService.addBook()
    if( val === 1){
      this.sub = this.http.post('http://localhost:23456/registrationBook',this.adminService.getBook()).subscribe(response => {
        var tmp = JSON.parse(JSON.stringify(response))
        console.log(tmp.toString())
      })
    }else{
      var cnt = 0
      var list = [2,3,5,7,11,13]
      while(val!==1 && list[cnt]!==null){
        if(val%list[cnt]===0){
          val = val/list[cnt]
          this.modifyView(list[cnt])
        }
        ++cnt
      }
    }
  }
  private modifyView(val: number){
    switch(val){
      case 2:
        this.wrongIsbn = true
        break
      case 3:
        this.wrongTitle = true
        break
      case 5:
        this.wrongName = true
        break
      case 7:
        this.wrongLanguage = true
        break
      case 11:
        this.wrongPosition = true
        break
      case 13:
        this.wrongCopies = true
        break
      case 17:
        this.wrongGerne = true
        break
      case 19:
        this.wrongName = true
    }
  }
  removeBook(){
    switch(this.adminService.removeBook()){
      case 0:
        this.wrongIsbn = true
        this.messageIsbn = this.messageIbs
        break
      case 1:
        console.log(this.adminService.getDelBook())
        this.sub = this.http.delete('http://localhost:23456/deleteBook/'+this.adminService.getDelBook()).subscribe(response => {
        var tmp = JSON.parse(JSON.stringify(response))
        console.log(tmp)
      })
        break
    }
  }
  handleUsername(value:string){
    this.users = this.adminService.searchUser(value)
  }
  removeUser(value: string){
    console.log(value)
    this.sub = this.http.delete('http://localhost:23456/deleteUser/'+value).subscribe(
      response => {
        var tmp = JSON.parse(JSON.stringify(response))
        console.log(tmp)
      }
    )
    setTimeout(() => {
      this.users= []
      this.sub = this.http.get('http://localhost:23456/UserList').subscribe(response=>{
        var tmp = JSON.parse(JSON.stringify(response))
        tmp.forEach((el: {idUser: string, Username: string, NameUser: string, SurnameUser: string, Email: string})=>{
          this.users.push(new Info(el.idUser,el.Username,el.Email,el.NameUser,el.SurnameUser,))
        })
        this.adminService.setUsers(this.users)
      })
    }, 1000);

  }
  }

