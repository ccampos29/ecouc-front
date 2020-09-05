import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './components/principal/principal.component';
import { RouterModule } from '@angular/router';
import { ContenidoEnvasesYreciclajeComponent } from './components/contenido-envases-yreciclaje/contenido-envases-yreciclaje.component';
import { InformacionGeneralComponent } from './components/informacion-general/informacion-general.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    ContenidoEnvasesYreciclajeComponent,
    InformacionGeneralComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PrincipalComponent,
    ContenidoEnvasesYreciclajeComponent,
    InformacionGeneralComponent
  ]
})
export class WebPageModule { }
