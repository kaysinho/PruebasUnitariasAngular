import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users
  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

  getUsers(){
    this.authService.getUsers().subscribe((data)=>{
      this.users = data
    })
  }
}
