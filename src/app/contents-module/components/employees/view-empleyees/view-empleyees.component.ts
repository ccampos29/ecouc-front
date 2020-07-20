import { element } from 'protractor';
import { ServiceEmployeeService } from './../service-employee.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-view-empleyees',
  templateUrl: './view-empleyees.component.html',
  styleUrls: ['./view-empleyees.component.css']
})
export class ViewEmpleyeesComponent implements OnInit {
  // variable que se comunica con el padre en este caso es content component
  @Output() ChildDetails = new EventEmitter<string>();

  ListUsers = [];

  constructor(public serviceEmployeeService: ServiceEmployeeService) {
  }

  ngOnInit(): void {
    this.SearchUsers();
  }
// ---------------------inicio buscar usuarios----------------------------
  SearchUsers() {
    this.ListUsers = [];
    this.serviceEmployeeService.SearchUser().subscribe(
      data => {
        this.ListUsers = data;
        console.log("estos son los datos a ser mostrados en html ", this.ListUsers);
      },
      err => {
        console.log(err);
      }
    );
  }
// ----------------------fin buscar usuarios--------------------------------

DetailsSendFather(msg: string) { // funcion que emite el mensaje enviado desde html por medio de la var @Output al padre
  console.log('details ', msg);
  this.ChildDetails.emit(msg);
}

// ------------------------desactivar usuario registrado-----------------
  Deactivate(userId) {
    this.serviceEmployeeService.Deactive(userId).subscribe(
      data => {
        for (var i = 0; i < this.ListUsers.length; i++) {
          if (this.ListUsers[i].id === data.id && data.deactivate === true) {
            this.ListUsers[i].active = false;
          }
        }
      },
      err => {
        console.log(err);
      }
    );
  }
// -------------------fin desactivar usuario registrado------------

}
