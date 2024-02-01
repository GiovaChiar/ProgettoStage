import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTileComponent } from "../../utils/input-tile/input-tile.component";
import { ActivatedRoute, ActivationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RegistrationService } from '../../../services/registration/registration.service';
import { routes } from '../../../app.routes';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-registration',
    standalone: true,
    templateUrl: './registration.component.html',
    styleUrl: './registration.component.scss',
    imports: [CommonModule, InputTileComponent, RouterOutlet, RouterLink, RouterLinkActive],
})
export class RegistrationComponent implements OnDestroy {
  email='email'
  wrongEmail = false
  messageEmail = ''

  username = 'username'
  wrongUsername = false
  messageUsername = ''

  name='name'
  wrongName = false
  messageName = ''

  surname='surname'
  wrongSurname = false
  messageSurname = ''

  pw='password'
  wrongPassword = false
  messagePassword = ''
  
  pwconfirm='confirm password'
  wrongPwconfirm = false
  messagePwconfirm = 'passwords do not match'

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  private sub: Subscription | undefined

  constructor(private regService: RegistrationService, private router: Router, private http: HttpClient){
  }
  handleUsernameEmitted(value: string){
    this.regService.setUsername(value)
    this.wrongUsername = false
  }
  handleEmailEmitted(value: string){
    const b = this.regService.setEmail(value)
    if(!b){
      this.wrongEmail = true
      this.messageEmail = "write an existing mail"
    }else{
      this.wrongEmail = false
    }
  }
  handleNameEmitted(value: string){
    this.regService.setName(value)
    this.wrongName = false
  }
  handleSurnameEmitted(value: string){
    this.regService.setSurname(value)
    this.wrongSurname = false
  }
  handlePasswordEmitted(value: string){
    this.regService.setPassword(value)
    this.wrongPassword = false
  }
  handlePwconfirmEmitted(value: string){
    const b = this.regService.setConfirmPassword(value)
    if(!b){
      this.wrongPwconfirm = true
    }else{
      this.wrongPwconfirm = false
    }
  }

  private modifyView(val: number){
    switch(val){
      case 2:
        this.wrongUsername = true
        this.messageUsername = 'missing Username'
        break
      case 3:
        this.wrongEmail = true
        this.messageEmail = 'missing Email'
        break
      case 5:
        this.wrongName = true
        this.messageName = 'missing Name'
        break
      case 7:
        this.wrongSurname = true
        this.messageSurname = 'missing Username'
        break
      case 11:
        this.wrongPassword = true
        this.messagePassword = 'missing Password'
        break
      case 13:
        this.wrongPwconfirm = true
        break
    }
  }

  registrationRequest(){
    var val = this.regService.tryRegister()
    if(val===1){
      console.log(this.regService.getUser())
      this.sub = this.http.post('http://localhost:23456/registration', this.regService.getUser()).subscribe(response => {
        var wrong = false
        console.log(JSON.stringify(response))
        var tmp = JSON.parse(JSON.stringify(response))
        if (tmp.username !== ''){
          this.wrongUsername = true
          this.messageUsername = 'Username already exist'
          wrong = true
        }
        if (tmp.email !== ''){
          this.wrongEmail = true
          this.messageEmail = 'Email already used'
          wrong = true
        }
        if(wrong){
          this.router.navigate(['login'])
        }
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
}
