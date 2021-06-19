import {Component, HostListener, OnInit} from '@angular/core';
import {AuthValidatorService} from "../../validators/auth-validator.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    style: any = {
        'height': '500px',
        'display': 'grid',
        'place-items': 'center'
    };

    username: string;
    password: string;


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
