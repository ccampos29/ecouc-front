import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponentComponent } from './components/default-component/default-component.component';
import {CreateEmployeeComponent} from './components/employees/create-employee/create-employee.component';
import { ViewEmpleyeesComponent } from './components/employees/view-empleyees/view-empleyees.component';
import { DetailsUserComponent } from './components/employees/details-user/details-user.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DefaultComponentComponent, CreateEmployeeComponent, ViewEmpleyeesComponent, DetailsUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateEmployeeComponent,
    DefaultComponentComponent,
    ViewEmpleyeesComponent,
    DetailsUserComponent
  ],

})
export class ContentsModuleModule { }
