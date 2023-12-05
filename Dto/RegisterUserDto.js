class RegisterUserDto{
    username;
    password;
    email;

    constructor(data){
        this.username= data.username;
        this.password= data.password;
        this.email= data.email;
    }
}

