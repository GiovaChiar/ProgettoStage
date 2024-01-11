import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { InputTileComponent } from "../../utils/input-tile/input-tile.component";
import { AccountService } from '../../../services/account/account.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

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

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  private sub: Subscription | undefined

  constructor(private route: Router,private accountService: AccountService, private http: HttpClient){}
  logout(){
    this.accountService.logout()
    this.route.navigate(['catalogue'])
  }
  /*handleOldPasswordEmitted(value: string){
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
        const ver = JSON.parse(JSON.stringify(localStorage.getItem('user')))
        const val = {
          idUtenti: ver,
          password: this.accountService.getPassword()
        }
        this.sub = this.http.put('http://localhost:23456/changePassword',val).subscribe(response => {
          var tmp = JSON.parse(JSON.stringify(response))
          console.log(tmp.toString())
        }) 
        break
    }
    
  }

  showUpdate(){
    this.changing = !this.changing
  }
}
