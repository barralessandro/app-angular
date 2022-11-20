import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/model/userInfo';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() userInfo: UserInfo;

  constructor() {
  }

  ngOnInit(): void {
  }

}
