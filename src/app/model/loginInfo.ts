export class LoginInfo {
    id: number;
    email: string;
    password: string;

    public constructor(id: number, email: string, password: string) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

}
