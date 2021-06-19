import {Injectable} from '@angular/core';
import {MessageService} from "primeng/api";
import {PASSWORD_CANNOT_BE_BLANK, USERNAME_CANNOT_BE_BLANK} from "./validator-messages";

@Injectable({
    providedIn: 'root'
})
export class AuthValidatorService {

    constructor(private readonly msgService: MessageService) {

    }

    public validateUser(username: string, password: string): boolean {
        let flag = true;
        if (!this.validateUsername(username)) {
            flag = false;
        }
        if (!this.validatePassword(password)) {
            flag = false;
        }
        return flag;
    }

    public validateUsername(username: string): boolean {
        if (username.trim().length === 0) {
          this.msgService.add(USERNAME_CANNOT_BE_BLANK);
            return false;
        }
        return true;
    }

    private validatePassword(password: string): boolean {
        if (password.trim().length === 0) {
          this.msgService.add(PASSWORD_CANNOT_BE_BLANK);
            return false;
        }
        return true;
    }
}
