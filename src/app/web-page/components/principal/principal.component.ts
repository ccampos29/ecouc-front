import { ContenidoEnvasesYreciclajeComponent } from './../contenido-envases-yreciclaje/contenido-envases-yreciclaje.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

video = '';

  constructor(private router: Router) { }


  ngOnInit(): void {
    var selectedClass = "";
    $("p").click(function(){
      selectedClass = $(this).attr("data-rel");
      $("#portfolio").fadeTo(50, 0.1);
      $("#portfolio div").not("."+selectedClass).fadeOut();
      setTimeout(function() {
        $("."+selectedClass).fadeIn();
        $("#portfolio").fadeTo(50, 1);
      }, 500);
    });
  }

  destruir(video){
    $(video).attr('src', $(video).attr('src'));
  }

}
