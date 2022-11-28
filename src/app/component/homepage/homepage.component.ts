import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  index: number;

  images = [ 
    'https://placeimg.com/640/480/tech/1',
    'https://placeimg.com/640/480/tech/2',
    'https://placeimg.com/640/480/tech/3',
    'https://placeimg.com/640/480/tech/4',
    'https://placeimg.com/640/480/tech/5',
    'https://placeimg.com/640/480/tech/6',
    'https://placeimg.com/640/480/tech/7',
    'https://placeimg.com/640/480/tech/8',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onChange(idx: any) {
    console.log(idx);
    this.index =  idx;
  }

}
