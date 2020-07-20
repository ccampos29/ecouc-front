import { GeneralServicesService } from './../../general-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-component',
  templateUrl: './default-component.component.html',
  styleUrls: ['./default-component.component.css']
})
export class DefaultComponentComponent implements OnInit {

// se inicializa la clase generalServicesService ya que el primer modulo que se renderiza es el de por defecto 
// y tiene que estar listo para todos los componentes dentro de content
  constructor(public generalServicesService: GeneralServicesService) { }

  ngOnInit(): void {
  }

}
