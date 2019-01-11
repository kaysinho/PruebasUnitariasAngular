import { Component, OnInit } from '@angular/core';
import { Session } from '../session';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  userData : Session = new Session("", "")
  constructor(public authService:AuthService, private router:Router){

  }

  signIn(){
    if (this.userData.isValid()){
      this.authService.login(this.userData).then((data) => {
        console.log(data)
        this.router.navigate(['/dashboard'])
      })
    }
  }

  ngOnInit() {
  }

}
