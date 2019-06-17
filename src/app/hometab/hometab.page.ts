import { Component } from '@angular/core';
// import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.page.html',
  styleUrls: ['./hometab.page.scss'],
})
export class HometabPage  {
  percent: number;
  radius: number = 100;
  fullTime: any = '00:01:30';

  timer: any = false;
  progress: any = 0;
  minutes: number = 1;
  seconds: any = 30;



  startTime() {
    clearInterval(this.timer);
    this.timer = false;
    this.percent = 0;
    this.progress = 0;

    let timeSplit = this.fullTime.split(':'); // return array 00:01:30
    this.minutes = timeSplit[1];
    this.seconds = timeSplit[2];

    let totalSeconds = Math.floor(this.minutes * 60) * parseInt(this.seconds);

    this.timer = setInterval(() => {

      if (this.percent == this.radius){
        clearInterval(this.timer);}

      this.percent = Math.round(((this.progress / totalSeconds) * 100)*100);//Math.floor((this.progress / totalSeconds) * 100); // this will return
      this.progress++;    
      console.log(this.percent);
    
    }, 1000)
    
  }
  // constructor(private menu: MenuController) { }
  // openFirst() {
  //   this.menu.enable(true, 'first');
  //   this.menu.open('first');
  // }
  // openSecond() {
  //   this.menu.enable(true, 'second');
  //   this.menu.open('second');
  // }
  // ngOnInit() {

  // }

}
