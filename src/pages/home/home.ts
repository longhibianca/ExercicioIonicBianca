import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private person: FormGroup;
  private apagar: FormGroup;
  private list = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.person = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required]
    });
    this.apagar = this.formBuilder.group({
      id: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

  }

  logApagar(person) {
    console.log("ID PERSON: " + person.id)
    this.list.forEach(element => {
      if (element.id == person.id) {
        this.list.splice(this.list.indexOf(person), 1);
      }
    });
  }

  logForm() {
    if (this.list.length > 0) {
      this.person.value.id = this.list.length;
    } else {
      this.person.value.id = 0;
    }
    this.list.push(this.person.value);
  }
}
