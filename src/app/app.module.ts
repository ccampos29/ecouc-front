import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// modules
import {SharedModuleModule} from './shared-module/shared-module.module';
import {UserModuleModule} from './user-module/user-module.module';
import {ContentsModuleModule} from './contents-module/contents-module.module';
import { WebPageModule } from './web-page/web-page.module';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule,
    UserModuleModule,
    ContentsModuleModule,
    WebPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
