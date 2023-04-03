import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit{

  imc : number;
  form: FormGroup;
  tipo: string;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      altura : new FormControl('',[Validators.required, Validators.min(0.01), Validators.max(3)]),
      peso : new FormControl('', [Validators.required, Validators.min(1), Validators.max(500)]),
    });
  }

  calcular(){
    this.imc = (this.form.value.peso/(this.form.value.altura*this.form.value.altura))

    if(this.imc <= 18.5)
    this.tipo = 'Abaixo do peso normal.';
    if(this.imc > 18.5 && this.imc <= 24.9)
    this.tipo = 'Peso normal.'
    if(this.imc > 25 && this.imc <= 29.9)
    this.tipo = 'Excesso de peso'
    if(this.imc > 30 && this.imc <= 34.9)
    this.tipo = 'Obesidade Classe l'
    if(this.imc > 35 && this.imc <= 39.9)
    this.tipo = 'Obesidade Classe ll'
    if(this.imc >= 40)
    this.tipo = 'Obesidade Classe lll'
  }



}
