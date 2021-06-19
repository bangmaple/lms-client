export default interface UserModel {
    username?: string;
    password?: string;
    fullname?: string;
    email?: string;
    role?: string;
    isDisabled?: boolean;
    description?: string;
    birthdate?: number;
}
