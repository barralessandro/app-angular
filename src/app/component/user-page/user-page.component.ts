import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { UserInfo } from 'src/app/model/userInfo';
import { WebService } from 'src/app/service/web.service';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  userId: any;
  userInfo: UserInfo;

  constructor(public activatedRoute: ActivatedRoute, public webService: WebService) {
    
    if(!!this.activatedRoute.snapshot.paramMap.get('id')) {
      this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    } 
    /*
    this.activatedRoute.paramMap
    .pipe(map(params => params.get('id')))
    .pipe(switchMap(id => this.webService.getUserInfo(id)))
    .subscribe(data =>{
      this.userInfo = new UserInfo(data);
    });
    */
  }

  ngOnInit(): void {
    if(!!this.userId) {
      this.webService.getUserInfo(this.userId).subscribe(data =>{
        this.userInfo = new UserInfo(data);
      });
    }
  }

}
