import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public pessoa = {
    matricula:'',
    nome:'',
    img:''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pessoa.nome = "Bianca";
    this.pessoa.matricula = "201611200164";
    this.pessoa.img = "../assets/imgs/foto.jpg";
  }

}
