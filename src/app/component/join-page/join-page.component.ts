import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInfo } from 'src/app/model/userInfo';
import { 
  trigger, 
  state, 
  style, 
  animate, 
  transition } from '@angular/animations';

@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.css'],
  animations: [
    trigger('thumbState', [
      state('inactive', style({
        opacity: 0, transform: 'scale(0.5)'
      })),
      state('active', style({ 
        opacity: 1, transform: 'scale(1)'
      })),
      transition('inactive => active', animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)')),
      transition('active => inactive', animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)'))
    ])
  ],
})
export class JoinPageComponent implements OnInit {
  joinUs: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.joinUs = new FormGroup({
      firstname : new FormControl(null, [Validators.required]),
      lastname : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password : new FormControl(null, [Validators.required]),
      repeatPassword : new FormControl(null, [Validators.required]),
    });
  }

  passwordMatch() {
    return !!this.joinUs.value.password && !!this.joinUs.value.repeatPassword ?
      this.joinUs.value.password === this.joinUs.value.repeatPassword :
      true;
  }

  onSubmit(){
    let userInfo = new UserInfo(this.joinUs.value);
    console.log(userInfo);
  }

}
