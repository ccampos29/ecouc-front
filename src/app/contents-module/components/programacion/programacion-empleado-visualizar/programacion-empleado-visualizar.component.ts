import { Component, OnInit } from '@angular/core';
import { ProgramacionEmpleadoService } from '../programacion-empleado.service';
import { FormGroup, FormControl, Validators, FormBuilder,  FormArray, ValidatorFn} from '@angular/forms';


@Component({
  selector: 'app-programacion-empleado-visualizar',
  templateUrl: './programacion-empleado-visualizar.component.html',
  styleUrls: ['./programacion-empleado-visualizar.component.css']
})
export class ProgramacionEmpleadoVisualizarComponent implements OnInit {

  listaProgramacionesXempleado = [];
  listaUsuario = [];
  formUsuario: FormGroup;

  constructor(private programacionEmpleadoService: ProgramacionEmpleadoService) {
    this.iniciarFormularioUsuario();
   }

  ngOnInit(): void {
    this.iniciarLista();
  }

  iniciarLista() {
    console.log("entro a iniciar listas");
    this.programacionEmpleadoService.iniciarListaUsuarios().subscribe(
      (dataUsuarios) => {
        console.log();
        this.listaUsuario = dataUsuarios;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  visualizarProgramacionEmpleado(){
    this.programacionEmpleadoService.visualizarProgramacionXempleado(this.formUsuario.value.usuario).subscribe(
      (programacion) => {
        console.log(programacion);
        this.listaProgramacionesXempleado = programacion;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  iniciarFormularioUsuario() {
    this.formUsuario = new FormGroup({
      usuario: new FormControl(''),
    });
  }

  get controlformUsuario() {
    return this.formUsuario.controls;
  }

 /* DetailsSendFather(id) {
    console.log(id);
  }*/
  Deactivate(id) {
    console.log(id);
    this.programacionEmpleadoService.eliminarProgramacionXempleado(id).subscribe(
      (programacion) => {
        console.log(programacion);
        this.visualizarProgramacionEmpleado();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
