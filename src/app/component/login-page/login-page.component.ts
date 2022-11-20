import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInfo } from 'src/app/model/loginInfo';
import { UserInfo } from 'src/app/model/userInfo';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginFormGroup: FormGroup;
  showSpinner: boolean;
  userInfoList: any[] = [];
  userInfoElem: UserInfo = new UserInfo({});
  constructor(public webService: WebService,
              public route: Router) { }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.email]),
      password : new FormControl(null, [Validators.required])
    });
  }

  login() {
    this.showSpinner = true;
    let user: LoginInfo;
    let userInfo = 
      new LoginInfo(0,this.loginFormGroup.value.email, 
                    this.loginFormGroup.value.password);
    if(!!userInfo && !!userInfo.email && !!userInfo.password) {
      //delay(5000);
      this.webService.login(userInfo).subscribe(data => {
        let info = data[0];
        user = new LoginInfo(info.id, info.email, info.password);
        this.showSpinner = false;
        if(!!user) {
          this.route.navigateByUrl('user-home/'+user.id);
        } else {
          this.route.navigateByUrl('not-found');
        }
      });
    }
  }

}
