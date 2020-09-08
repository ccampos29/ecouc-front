import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {

  UserName="usuario no registrado";

  constructor() { }

  ngOnInit(): void {
    this.extractUsername();
  }

  private extractUsername() {
    let data = JSON.parse(sessionStorage.getItem('credentials'));
    if (data) {
      this.UserName = data.username;
    }
  }

}
