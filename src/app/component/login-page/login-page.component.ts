import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/model/userInfo';
import { UtilityService } from 'src/app/service/utility.service';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  userInfoList: any[] = [];
  userInfoElem: UserInfo = new UserInfo({});
  constructor(public webService: WebService,
              public route: Router) { }

  ngOnInit(): void {
    this.webService.getAllUsersLoginInfo().subscribe(data =>{
      this.userInfoList = data;
    });
  }

  login(elem: any) {
    if(true) {
      this.userInfoElem = this.userInfoList.filter(userInfo => this.checkUserInfo(userInfo, ''))[0];
      if(!!this.userInfoElem && !!this.userInfoElem.id) {
        this.route.navigateByUrl('user-home/'+this.userInfoElem.id);
      } else {
        this.route.navigateByUrl("not-found");
      }
    }
  }

  checkUserInfo(userInfo:any, userInfoFromBrowser: any) {
    return userInfo.username === userInfoFromBrowser.username && 
    userInfo.password === userInfoFromBrowser.password;
  }


}
