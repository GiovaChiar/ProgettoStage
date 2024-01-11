import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdiminService } from '../../../services/admin/adimin.service';
import { InputTileComponent } from "../../utils/input-tile/input-tile.component";
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [CommonModule, InputTileComponent]
})
export class AdminComponent {
  constructor(private adminService: AdiminService, private http: HttpClient){}
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  private sub: Subscription | undefined
  message = "missing field"
  messageIbs = "must be 13 digits"
  handleIsbn(value: string){
    this.adminService.setIsbn(value)
  }
  handleTitle(value: string){
    this.adminService.setTitle(value)
  }
  handleSurname(value: string){
    this.adminService.setSurname(value)
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
    switch(this.adminService.addBook()){
      case 1: 
        this.sub = this.http.post('http://localhost:23456/registrazione-libro',this.adminService.getBook()).subscribe(response => {
          var tmp = JSON.parse(JSON.stringify(response))
          console.log(tmp.toString())
        })
        break
    }
  }
  removeBook(){
    switch(this.adminService.removeBook()){
      case 0:
        break
      case 1:
        this.sub = this.http.delete('http://localhost:23456/deleteLibri/'+this.adminService.getDelBook()).subscribe(response => {
        var tmp = JSON.parse(JSON.stringify(response))
        console.log(tmp.toString())
      })
        break
    }
  }
}
