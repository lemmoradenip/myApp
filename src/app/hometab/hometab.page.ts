import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.page.html',
  styleUrls: ['./hometab.page.scss'],
})
export class HometabPage implements OnInit {
  percent: number = 99;
  radius: number = 100;
  fullTime: any = '00:01:30';


  constructor(private menu: MenuController) { }


startTime(){
  console.log('i was clicked but do nothing!');
}


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  openSecond() {
    this.menu.enable(true, 'second');
    this.menu.open('second');
  }
  ngOnInit() {

  }

}
