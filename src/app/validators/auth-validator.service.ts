import {Injectable} from '@angular/core';
import {MessageService} from "primeng/api";

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
          this.msgService.add({
            icon: 'error',
            summary: 'Thất bại khi đăng nhập',
            detail: 'Vui lòng không được để trống tên đăng nhập'
          });
            return false;
        }
        return true;
    }

    private validatePassword(password: string): boolean {
        if (password.trim().length === 0) {
          this.msgService.add();
            return false;
        }
        return true;
    }
}
