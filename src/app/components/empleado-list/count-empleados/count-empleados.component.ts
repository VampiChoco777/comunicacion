import { Empleado } from './../../../models/Empleado';
import { Component, OnInit } from '@angular/core';
import { EmpleadoListComponent } from '../empleado-list.component';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.scss']
})
export class CountEmpleadosComponent implements OnInit {
  radioBottonSeleccionado: string = 'empleados';
  genero: any = ['empleados', 'masculino', 'femeninos'];

  constructor(private empleadoListComponent: EmpleadoListComponent) { }

  radioChangeHandler(event: any) {
    this.radioBottonSeleccionado = event.target.value;
    //this.obtenerTotalEmpleados(this.radioBottonSeleccionado);
  }

  obtenerTotalEmpleados(sex: string): number{
    if(sex=="masculino") {
      return this.empleadoListComponent.listEmpleados.filter((list) => list.Sexo == "masculino").length;

    }
    if(sex=="femenino") {
      return this.empleadoListComponent.listEmpleados.filter((list) => list.Sexo == "femenino").length;
    }
    return this.empleadoListComponent.listEmpleados.length;
  }

  ngOnInit(): void {
  }
}
