import { Injectable } from '@angular/core';
export class Empleado {
  No: number = 0;
  RFC: string =  "";
  Nombre_Completo: string = "";
  Apellido_Paterno: string = "";
  Apellido_Materno: string = "";
  Sexo: string = "";
  Salario: number = 0;

  constructor(No: number, RFC: string, Nombre_Completo: string, Apellido_Paterno: string, Apellido_Materno: string, Sexo: string, Salario: number) {
    this.No = No;
    this.RFC = RFC;
    this.Nombre_Completo = Nombre_Completo;
    this.Apellido_Paterno = Apellido_Paterno;
    this.Apellido_Materno = Apellido_Materno;
    this.Sexo = Sexo;
    this.Salario = Salario;
  }


}
