import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';



@NgModule({
  declarations: [UserLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    UserLoginComponent
  ],
  providers: [
    HttpClientModule,
    HttpClient,
],
})
export class UserModuleModule { }
