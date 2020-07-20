import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  MsgChildViewAllUser: string; // variable que va contener el dato enviado desde el hijo viewEmployeesComponent
  Component = 'defaultComponent';


  constructor() { }

  ngOnInit(): void {
  }

  ChangeComponent(value) {
    this.Component = value;
  }

  // funcion por el cual el hijo hace uso para comunicarse con este padre por medio de la html del <app-view-empleyees>
  MessageChildViewAllUser(msgChildConfirm: string) {
    this.MsgChildViewAllUser = msgChildConfirm;//cambia la variable mensaje para el otro componente hijo a abrir 
    this.Component = 'detailsUserComponent';//cambia el componente a ser abierto
  }

}
