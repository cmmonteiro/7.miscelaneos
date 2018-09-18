import { HomePage } from './../home/home';
import { Pagina3Page } from './../pagina3/pagina3';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ir_pag3(){
    this.navCtrl.push("mi_pagina3");

  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad");
  }
  ionViewWillEnter(){
    console.log("ionViewWillEnter")}

  ionViewDidEnter(){
    console.log("ionViewDidEnter")
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave")
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave")
  }
  ionViewWillUnload(){
    console.log("ionViewWillUnload")
  }

  ionViewCanEnter(){
    console.log("ionViewCanEnter")
  }

  ionViewCanLeave(){
    console.log("ionViewCanLeave")
  }

}
