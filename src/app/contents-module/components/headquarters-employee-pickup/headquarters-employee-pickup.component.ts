import { ProgramacionEmpleadoService } from './../programacion/programacion-empleado.service';
import { HeadquartersEmployeePickupService } from './headquarters-employee-pickup.service';
import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

import { FormGroup, FormControl, Validators, FormBuilder,  FormArray, ValidatorFn} from '@angular/forms';
import { promise } from 'protractor';
import { ArrayType } from '@angular/compiler';



@Component({
  selector: 'app-headquarters-employee-pickup',
  templateUrl: './headquarters-employee-pickup.component.html',
  styleUrls: ['./headquarters-employee-pickup.component.css']
})
export class HeadquartersEmployeePickupComponent implements OnInit {
  listaUsuarios = [];
  formUser: FormGroup;
  listDataCharts = [];

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Cantidad de recipientes recogidos' }
  ];

  constructor(
    private headquartersEmployeePickupService: HeadquartersEmployeePickupService,
    private programacionEmpleadoService: ProgramacionEmpleadoService,
    private formBuilder: FormBuilder,
    ) {
      this.iniciarFormularioUser();
    }

  ngOnInit(): void {
    this.barChartLabels = [];
    this.iniciarListas();
  }


  iniciarListas() {
    console.log("entro a iniciar listas");
    this.programacionEmpleadoService.iniciarListaUsuarios().subscribe(
      (dataUsuarios) => {

        this.listaUsuarios = dataUsuarios;
        console.log(this.listaUsuarios);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  iniciarFormularioUser() {
    this.formUser = new FormGroup({
      user: new FormControl(''),
    });
  }
  get controladorForm() {
    return this.formUser.controls;
  }

   searchHeadquarters(){
    this.headquartersEmployeePickupService.searchHeadquarter(this.formUser.value).subscribe(
      (data) => {
        console.log(data);
        this.buildData(data);

      },
      (error) => {
        console.log("hubo un error en el traer los resultados de la consulta ", error);
      });
    }

  buildData(dataConsult) {
    let keyNewElement=true;
    let listDataTotalItems=[]
    let listData = [];
    let objData = {
      name: "",
      total: 0
    };
    this.listDataCharts=dataConsult;
    console.log("esto es listDataCharts", this.listDataCharts);
    //----------------------
    dataConsult.forEach(element => {
      listData.forEach(dataObj => {
        if (dataObj === null || dataObj === undefined ) {
          objData = {
            name: element.boteBasuraFk.area,
            total: 1
          };
          listData.push(objData);
          keyNewElement = false;
        }
        else if (dataObj.name === element.boteBasuraFk.area) {
          console.log(dataObj.name  );
          console.log(element.boteBasuraFk.area);

          dataObj.total = dataObj.total + 1;
          keyNewElement = false;
        }
      });
      if (keyNewElement) {
        console.log(element.boteBasuraFk.area);
        objData = {
          name: element.boteBasuraFk.area,
          total: 1
        };
        listData.push(objData);
      }
      keyNewElement = true;
    });

    listData.forEach(element => {
      this.barChartLabels.push(element.name);
      listDataTotalItems.push(parseInt(element.total, 10));
      //grafico circular
      //this.doughnutChartLabels.push(element.name);
    });
    console.log(listDataTotalItems,"listadatatotalitems");
    this.barChartData[0].data = listDataTotalItems;
    //this.doughnutChartData = listDataTotalItems;
  }

}
