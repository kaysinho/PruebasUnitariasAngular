export class Session {
    email: string
    password: string

    constructor(_email: string, _password: string){
        this.email = _email
        this.password = _password
    }

    public isValid():boolean{
        if (this.email.length && this.password.length ){
            return true
        }

        return false
    }
}
