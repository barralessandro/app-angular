export class UserInfo {
    id: number;
    userLoginInfoId: number;
    firstname: string;
    lastname: string;
    email: string;
    city: string;
    cap: string;
    province: string;

    public constructor(json: any) {
        this.id = json.id;
        this.userLoginInfoId = json.userLoginInfoId;
        this.firstname = json.firstname;
        this.lastname = json.lastname;
        this.email = json.email;
        this.city = json.city;
        this.cap = json.cap;
        this.province = json.province;
    }

}
