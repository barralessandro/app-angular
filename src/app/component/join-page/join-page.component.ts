import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInfo } from 'src/app/model/userInfo';

@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.css']
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
