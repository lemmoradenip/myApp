import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Insomnia } from '@ionic-native/insomnia/ngx';


@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.page.html',
  styleUrls: ['./hometab.page.scss'],
})
export class HometabPage implements OnInit {
  percent: number;
  radius: number = 100;
  fullTime: any = '00:00:10';

  timer: any = false;
  progress: any = 0;
  minutes: any = 0;
  seconds: any = 30;

  elapsed: any = {
    h: '00',
    m: '00',
    s: '00'
  }
  overalltimer: any = false;

  constructor(private menu: MenuController, private insomnia: Insomnia) {

  }

  startTime() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (!this.overalltimer) {
      this.progressTimer();
    }
    else {
      clearInterval(this.overalltimer);
    }

    this.timer = false;
    this.percent = 0;
    this.progress = 0;

    let timeSplit = this.fullTime.split(':'); // return array 00:01:30
    this.minutes = timeSplit[1];
    this.seconds = timeSplit[2];



    let totalSeconds = Math.round(parseInt(this.minutes) * 60) + parseInt(this.seconds);

    this.timer = setInterval(() => {
      if (this.progress == totalSeconds) {
        clearInterval(this.timer);
      }
      this.percent = Math.round((this.progress / totalSeconds) * 100); // this equivalent to total seconds

      /* if (!this.overalltimer) {
         this.elapsed.h = this.pad(0, 2);
         this.elapsed.m = this.pad(this.elapsed.m, 2);
         this.elapsed.s = this.pad(this.elapsed.s, 2);
       }*/

      this.progress++
    }, 1000)

  }

  progressTimer() {
    let countDownDate = new Date();
    this.overalltimer = setInterval(() => {
      if (!this.overalltimer) {
        this.progressTimer();
      }


      let now = new Date().getTime();
      let distance = now - countDownDate.getTime();
      console.log(distance);

      this.elapsed.h = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      this.elapsed.m = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
      this.elapsed.s = Math.floor((distance % (1000 * 60) / 1000));

      this.elapsed.h = this.pad(this.elapsed.h, 2);
      this.elapsed.m = this.pad(this.elapsed.m, 2);
      this.elapsed.s = this.pad(this.elapsed.s, 2);
    }, 1000);
  }
  pad(num, size) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }


  stopTime() {
    clearInterval(this.timer);
    clearInterval(this.overalltimer);
    this.overalltimer = false;
    this.timer = false;
    this.percent = 0;
    this.progress = 0;
    // this.elapsed = {
    //   h: '00',
    //   m: '00',
    //   s: '00'
    // }
    this.insomnia.allowSleepAgain();
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
