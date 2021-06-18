import {Message} from "primeng/api";

const ERROR = 'error';
const LOGIN_FAILED = 'Thất bại khi đăng nhập';

const CANNOT_BE_BLANK = 'Vui lòng không được để trống ';

const USERNAME = 'tên đăng nhập';
const PASSWORD = 'mật khẩu';
const EMAIL = 'địa chỉ e-mail';

export const USERNAME_CANNOT_BE_BLANK: Message = {
    icon: ERROR,
    summary: LOGIN_FAILED,
    detail: CANNOT_BE_BLANK + USERNAME,
};

export const PASSWORD_CANNOT_BE_BLANK: Message = {
    icon: ERROR,
    summary: LOGIN_FAILED,
    detail: CANNOT_BE_BLANK + PASSWORD,
};
