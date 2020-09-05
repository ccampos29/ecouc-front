import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contenido-envases-yreciclaje',
  templateUrl: './contenido-envases-yreciclaje.component.html',
  styleUrls: ['./contenido-envases-yreciclaje.component.css']
})
export class ContenidoEnvasesYreciclajeComponent implements OnInit {

  contenido = "";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.contenido = params['id'];
    });
  }

  
}
