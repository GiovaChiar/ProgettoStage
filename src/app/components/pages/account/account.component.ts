import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { InputTileComponent } from "../../utils/input-tile/input-tile.component";
import { AccountService } from '../../../services/account/account.service';

@Component({
    selector: 'app-account',
    standalone: true,
    templateUrl: './account.component.html',
    styleUrl: './account.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, InputTileComponent]
})
export class AccountComponent {

  changing = false

  wrongPassword = false
  messagePassword = 'wrong password'

  wrongNewPassword = false


  wrongPwconfirm = false
  messagePwconfirm = 'passwords do not match'


  constructor(private route: Router,private accountService: AccountService){}
  logout(){
    this.accountService.logout()
    this.route.navigate(['catalogue'])
  }
 /* handleOldPasswordEmitted(value: string){
    if(!this.accountService.verifyPassoword(value))
      this.wrongPassword = true
    else{
      this.wrongPassword = false
    }
  }*/
  handleNewPasswordEmitted(value: string){
    this.accountService.setPassword(value)
  }
  handleCorfirmPW(value: string){
    if(!this.accountService.setConfirmPassword(value)){
      this.wrongNewPassword = true
      this.wrongPwconfirm = true
    }else{
      this.wrongNewPassword = false
      this.wrongPwconfirm = false
    }
  }
  changePassword(){
    switch(this.accountService.changePassword()){
      case 1:
        this.wrongPassword = true
        this.wrongNewPassword = true
        this.wrongPwconfirm = true
        break
      case 2:
        this.wrongPassword = true
        break
      case 3:
        this.wrongNewPassword = true
        this.wrongPwconfirm = true
        break
      case 4:
        break
    }
    
  }

  showUpdate(){
    this.changing = !this.changing
  }
}
