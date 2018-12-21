import { Component } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private calc: FormGroup;
  public valor1: number;
  public valor2: number;
  public operacao: string;
  public resultado: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.calc = this.formBuilder.group({
      valor1: ['', Validators.required],
      valor2: ['', Validators.required],
      operacao: ['', Validators.required],
      resultado: ['']
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  logForm(form) {
    this.valor1 = parseFloat(form.value.valor1);
    this.valor2 = parseFloat(form.value.valor2);
    this.operacao = form.value.operacao;
  }

  public calcular(): number {

    switch (this.operacao) {
      case "+":
        this.resultado = this.valor1 + this.valor2;
        break;

      case "-":
        this.resultado = this.valor1 - this.valor2;
        break;

      case "*":
        this.resultado = this.valor1 * this.valor2;
        break;

      case "/":
        if (this.valor2 <= 0.0) {
          console.log("Não é possível realizar divisão com denominador 0");
        } else {
          this.resultado = this.valor1 / this.valor2;
        }
        break;
    }

    return this.resultado;

  }

}
