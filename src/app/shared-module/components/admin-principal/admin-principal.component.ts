import { Component, OnInit, ViewChild  } from '@angular/core';
import * as $ from 'jquery';
import { ContentComponent } from './../content/content.component';


@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.component.html',
  styleUrls: ['./admin-principal.component.css']
})
export class AdminPrincipalComponent implements OnInit {
  @ViewChild(ContentComponent) ContentComponent: ContentComponent;

  constructor() {
  }

  changeContent(data) {// metodo por el cual se envia el contenido a mostrar al componente content->se envia padre a hijo
    this.ContentComponent.ChangeComponent(data);
  }


  ngOnInit(): void {
    // Controles de todo el menu principal de la izquierda
      $('.sidebar-dropdown > a').click(function() {
        $('.sidebar-submenu').slideUp(200);
        if ($(this).parent().hasClass('active')) {
          $('.sidebar-dropdown').removeClass('active');
          $(this).parent().removeClass('active');
        }
        else {
          $('.sidebar-dropdown').removeClass('active');
          $(this).next('.sidebar-submenu').slideDown(200);
          $(this).parent().addClass('active');
        }
      });
      $('#close-sidebar').click(function() {
        $('.page-wrapper').removeClass('toggled');
      });
      $('#show-sidebar').click(function() {
        $('.page-wrapper').addClass('toggled');
      });

  }



}
