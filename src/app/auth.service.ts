import { Injectable } from '@angular/core';
import { Session } from './session';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API="https://api.github.com/users"
  constructor(private http:HttpClient) { }

  async login(userData:Session){
    return new Promise((resolve, reject)=>
      setTimeout(()=>{
        resolve(true)
      }, 4000)

    )
  }

  getUsers(){
    return this.http.get(this.API)
  }
}

