import {Component, OnInit} from '@angular/core';
import UserModel from "../users.model";
import {UsersService} from "../../../services/users.service";

@Component({
    selector: 'app-update-selected-user',
    templateUrl: './update-selected-user.component.html',
    styleUrls: ['./update-selected-user.component.css']
})
export class UpdateSelectedUserComponent implements OnInit {
    _isUpdateUserDialogShown: boolean;
    user: UserModel;
    date: Date = new Date();

    constructor(private readonly usersSerivce: UsersService) {
    }

    ngOnInit(): void {
    }

    hideUpdateUserDialog() {
        this._isUpdateUserDialogShown = false;
    }
}
