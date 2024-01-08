import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdiminService } from '../../../services/admin/adimin.service';
import { InputTileComponent } from "../../utils/input-tile/input-tile.component";
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [CommonModule, InputTileComponent]
})
export class AdminComponent {
  constructor(private adminService: AdiminService){}

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
    this.adminService.addBook()
  }
  removeBook(){
    this.adminService.removeBook()
  }
}
