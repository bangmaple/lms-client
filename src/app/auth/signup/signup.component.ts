import {Component, HostListener, OnInit} from '@angular/core';
import {AuthValidatorService} from "../../validators/auth-validator.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  style: any = {
    'height': '500px',
    'display': 'grid',
    'place-items': 'center'
  };

  username: string;
  password: string;
  email: string;
  rePassword: string;


  ngOnInit(): void {
    this.style.height = window.innerHeight + 'px';
    console.log(this.style.height);
  }

  constructor(private readonly validator: AuthValidatorService) {
    this.username = '';
    this.password = '';
  }


  @HostListener('window:resize')
  onChangeScreenSize() {

  }


  attemptSignin() {
    if (this.validator.validateUser(this.username, this.password)) {

    }
  }
}
