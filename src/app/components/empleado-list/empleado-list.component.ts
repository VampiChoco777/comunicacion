import { Component } from '@angular/core';
import { Empleado } from '../../models/Empleado';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.scss']
})
export class EmpleadoListComponent {
  listEmpleados: Empleado[] = [
    {No: 1, RFC: "123456789", Nombre_Completo: "Juan Perez", Apellido_Paterno: "Perez", Apellido_Materno: "Perez", Sexo: "masculino", Salario: 10000},
    {No: 2, RFC: "987654321", Nombre_Completo: "Maria Lopez", Apellido_Paterno: "Lopez", Apellido_Materno: "Lopez", Sexo: "femenino", Salario: 15000},
    {No: 3, RFC: "123456789", Nombre_Completo: "Pedro Ramirez", Apellido_Paterno: "Ramirez", Apellido_Materno: "Ramirez", Sexo: "masculino", Salario: 20000},
    {No: 4, RFC: "987654321", Nombre_Completo: "Luisa Martinez", Apellido_Paterno: "Martinez", Apellido_Materno: "Martinez", Sexo: "femenino", Salario: 25000}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  radioBottonSeleccionado: string = "empleados";

  genero: any = [
    'masculino',
    'femenino',
    'empleados'
  ]

  radioChangeHandler(event: any)
  {
    this.radioBottonSeleccionado = event.target.value;
  }
}
