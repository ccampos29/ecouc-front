import { ProgramacionEmpleadoService } from '../programacion-empleado.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,  FormArray, ValidatorFn} from '@angular/forms';
import { observable } from 'rxjs';

@Component({
  selector: 'app-programacion-empleado-create',
  templateUrl: './programacion-empleado-create.component.html',
  styleUrls: ['./programacion-empleado-create.component.css']
})
export class ProgramacionEmpleadoCreateComponent implements OnInit {

  formProgramacion: FormGroup; // formulario programacion
  listaUsuarios = [];
  listaFacultadeXsede = [];

  constructor(private formBuilder: FormBuilder, private programacionEmpleadoService: ProgramacionEmpleadoService ) {
    this.iniciarFormularioProgramacion();
   }

  ngOnInit(): void {
    this.iniciarListas();
  }

  iniciarListas() {
    console.log("entro a iniciar listas");
    this.programacionEmpleadoService.iniciarListaUsuarios().subscribe(
      (dataUsuarios) => {

        this.listaUsuarios = dataUsuarios;
        this.programacionEmpleadoService.iniciarListaFacultadXsede().subscribe(
          (dataFacultad) => {

            this.listaFacultadeXsede = dataFacultad;
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  crearProgramacionDia() {
    console.log(this.formProgramacion.value);
    this.programacionEmpleadoService.crearProgramacionDia(this.formProgramacion.value).subscribe(
      (programacionDia) => {
        this.iniciarFormularioProgramacion();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  iniciarFormularioProgramacion() {
    this.formProgramacion = new FormGroup({
      dia: new FormControl(''),
      horaIni: new FormControl('', [Validators.required, Validators.minLength(5)]),
      horaFin: new FormControl('', [Validators.required, Validators.minLength(5)]),
      user: new FormControl(''),
      facultadXsede: new FormControl(''),
    });
  }
 
  get controladorForm() {
    return this.formProgramacion.controls;
  }
}
