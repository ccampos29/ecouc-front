import { ChartsModuleService } from './charts-module.service';
import { Component, OnInit } from '@angular/core';


import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
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
  //grafico sircular inicial
  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';

  constructor(private chartsModuleService: ChartsModuleService) { }

  ngOnInit(): void {
    this.initDataChart();
  }

 initDataChart(){
    let keyNewElement = true;

    this.barChartLabels = [];

    //grafico circular
    this.doughnutChartLabels = [];

    let listTotalData = [];
    let objData = {
      name: "",
      total: 0
    };
    let listDataTotalItems = []

    this.chartsModuleService.dataEmployeesCleanliness().subscribe(
      (data) => {
        console.log("funciono!!", data);
        data.forEach(element => {
          listTotalData.forEach(dataObj => {
            if (dataObj === null || dataObj === undefined ) {
              objData = {
                name: element.userFk.userName,
                total: 1
              };
              listTotalData.push(objData);
              keyNewElement = false;
            }
            else if (dataObj.name === element.userFk.userName) {
              console.log(dataObj.name  );
              console.log(element.userFk.userName);

              dataObj.total = dataObj.total + 1;
              keyNewElement = false;
            }
          });
          if (keyNewElement) {
            console.log(element.userFk.userName);
            objData = {
              name: element.userFk.userName,
              total: 1
            };
            listTotalData.push(objData);
          }
          keyNewElement = true;
        });

        listTotalData.forEach(element => {
          this.barChartLabels.push(element.name);
          listDataTotalItems.push(parseInt(element.total, 10));
          //grafico circular
          this.doughnutChartLabels.push(element.name);
        });
        console.log(listDataTotalItems,"listadatatotalitems");
        this.barChartData[0].data = listDataTotalItems;
        this.doughnutChartData = listDataTotalItems;
      },
      (error) => {

      }
    );
  }

}
