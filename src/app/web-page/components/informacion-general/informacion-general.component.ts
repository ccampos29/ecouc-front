import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { param } from 'jquery';


@Component({
  selector: 'app-informacion-general',
  templateUrl: './informacion-general.component.html',
  styleUrls: ['./informacion-general.component.css']
})
export class InformacionGeneralComponent implements OnInit {
  contenido = "";

  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      this.contenido = params['id'];
    });
  }

}
