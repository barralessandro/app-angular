export class UserInfo {
    id: number;
    userLoginInfoId: number;
    firstName: string;
    lastName: string;
    username: string;
    city: string;
    cap: string;
    province: string;

    public constructor(json: any) {
        this.id = json.id;
        this.userLoginInfoId = json.userLoginInfoId;
        this.firstName = json.firstName;
        this.lastName = json.lastName;
        this.username = json.username;
        this.city = json.city;
        this.cap = json.cap;
        this.province = json.province;
    }


    // public constructor(id: any, userLoginInfoId: any, firstName: any, 
    //     lastName: any, address: any, city: any, cap: any, province: any) {
    //         this.id = id;
    //         this.userLoginInfoId = userLoginInfoId;
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //         this.address = address;
    //         this.city = city;
    //         this.cap = cap;
    //         this.province = province;
    // }
}
