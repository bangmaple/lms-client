import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import UserModel from "../users.model";
import {UsersService} from "../../../services/users.service";

@Component({
    selector: 'app-view-detail-user-dialog',
    templateUrl: './view-detail-user-dialog.component.html',
    styleUrls: ['./view-detail-user-dialog.component.css']
})
export class ViewDetailUserDialogComponent implements OnInit {
    _isViewDetailDialogShown: boolean;
    user: UserModel;

    constructor() {
        this._isViewDetailDialogShown = false;
    }

    ngOnInit(): void {
    }

    hideViewDetailUserDialog() {
        this._isViewDetailDialogShown = false;
    }
}
