import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { LoginInfo } from 'src/app/model/loginInfo';
import { UserInfo } from 'src/app/model/userInfo';
import { WebService } from 'src/app/service/web.service';
import { 
  trigger, 
  state, 
  style, 
  animate, 
  transition } from '@angular/animations';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  animations: [
    trigger('toggleClick', [
    state('true', style({ backgroundColor: 'blue'})),
    state('false', style({ backgroundColor: 'red' })),
    transition('true => false', animate('1000ms linear')),
    transition('false => true', animate('1000ms linear'))
  ])
  ]  
})
export class LoginPageComponent implements OnInit {
  loginFormGroup: FormGroup;
  showSpinner: boolean;
  userInfoList: any[] = [];
  userInfoElem: UserInfo = new UserInfo({});
  isBlue: string = 'true';

  constructor(public webService: WebService,
              public route: Router) { }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.email]),
      password : new FormControl(null, [Validators.required])
    });
  }

  toggleIsCorrect() {
    this.isBlue = this.isBlue === 'true' ? 'false' : 'true';
  }

  login() {
    this.showSpinner = true;
    let user: LoginInfo;
    let info: {id: any, email: any, password: AnimationPlaybackEventInit};
    let userInfo = 
      new LoginInfo(0,this.loginFormGroup.value.email, 
                    this.loginFormGroup.value.password);
    
    if(!!userInfo && !!userInfo.email && !!userInfo.password) {
      //delay(5000);
      this.webService.login(userInfo).subscribe(data => {
        let info = data[0];
        this.showSpinner = false; 
        if(!!info && !!info.id) {
          this.route.navigateByUrl('user-home/'+info.id);
        } else {
          this.route.navigateByUrl('not-found');
        }
      });
    }
    /*
    if(!!userInfo && !!userInfo.email && !!userInfo.password) {
      //delay(5000);
      this.webService.login(userInfo).pipe(map(data => {
        info = data[0]
      })).subscribe(()=> {
        this.showSpinner = false;
        if(!!info) {
          this.route.navigateByUrl('user-home/'+info.id);
        } else {
          this.route.navigateByUrl('not-found');
        }
      });
    }
    GESTIONE ERRORI
    FARE UNSUBSCRIBE
    */
  }

}
