import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from 'src/app/model/userInfo';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  userId: any;
  userInfo: UserInfo = new UserInfo({});
  
  constructor(public activatedRoute: ActivatedRoute, public webService: WebService) {
    if(!!this.activatedRoute.snapshot.paramMap.get('id')) {
      this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    }         
  }

  ngOnInit(): void {
    this.webService.getUserInfo(this.userId).subscribe(data =>{
      this.userInfo = new UserInfo(data);
    });
  }

}
