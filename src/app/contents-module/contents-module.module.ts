import { HeadquartersEmployeePickupComponent } from './components/headquarters-employee-pickup/headquarters-employee-pickup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponentComponent } from './components/default-component/default-component.component';
import {CreateEmployeeComponent} from './components/employees/create-employee/create-employee.component';
import { ViewEmpleyeesComponent } from './components/employees/view-empleyees/view-empleyees.component';
import { DetailsUserComponent } from './components/employees/details-user/details-user.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgramacionEmpleadoCreateComponent } from './components/programacion/programacion-empleado-create/programacion-empleado-create.component';
import { ProgramacionEmpleadoVisualizarComponent } from './components/programacion/programacion-empleado-visualizar/programacion-empleado-visualizar.component';
import { ChartsComponent } from './components/charts/charts.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DefaultComponentComponent,
    CreateEmployeeComponent,
    ViewEmpleyeesComponent,
    DetailsUserComponent,
    ProgramacionEmpleadoCreateComponent,
    ProgramacionEmpleadoVisualizarComponent,
    ChartsComponent,
    HeadquartersEmployeePickupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  exports: [
    CreateEmployeeComponent,
    DefaultComponentComponent,
    ViewEmpleyeesComponent,
    DetailsUserComponent,
    ProgramacionEmpleadoCreateComponent,
    ProgramacionEmpleadoVisualizarComponent,
    ChartsComponent,
    HeadquartersEmployeePickupComponent
  ],

})
export class ContentsModuleModule { }
