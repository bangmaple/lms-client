export default interface UserModel {
    id?: number;
    username?: string;
    password?: string;
    fullname?: string;
    email?: string;
    role?: string;
    isDisabled?: boolean;
    description?: string;
    birthdate?: number;
}
