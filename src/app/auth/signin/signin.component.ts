import {Component, HostListener, OnInit} from '@angular/core';
import {AuthValidatorService} from "../../validators/auth-validator.service";
import {AuthService} from "../../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../services/api.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css'],
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

    constructor(private readonly validator: AuthValidatorService,
                private readonly authService: AuthService) {
        this.username = '';
        this.password = '';
    }

    @HostListener('window:resize')
    onChangeScreenSize() {

    }


    attemptSignin() {
        if (this.validator.validateUser(this.username, this.password)) {
            this.authService.attemptAuth({username: this.username, password: this.password}).subscribe(console.warn);
        }
    }
}
