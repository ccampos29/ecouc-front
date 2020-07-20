import { ContentsModuleModule } from './../contents-module/contents-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { SidebarUserComponent } from './components/sidebar-user/sidebar-user.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { ContentComponent } from './components/content/content.component';
import { AdminPrincipalComponent } from './components/admin-principal/admin-principal.component';
import { SidebarFooterComponent } from './components/sidebar-footer/sidebar-footer.component';




@NgModule({
  declarations: [
    NavbarHeaderComponent,
    HeaderNavComponent,
    SidebarUserComponent,
    SidebarNavComponent,
    ContentComponent,
    AdminPrincipalComponent,
    SidebarFooterComponent
  ],
  imports: [
    CommonModule,
    ContentsModuleModule
  ],
  exports: [
    NavbarHeaderComponent,
    HeaderNavComponent,
    SidebarUserComponent,
    SidebarNavComponent,
    ContentComponent,
    AdminPrincipalComponent,
    SidebarFooterComponent
  ]
})
export class SharedModuleModule { }
