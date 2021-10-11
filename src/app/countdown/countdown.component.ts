import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {

  countdown = '';
  days = 0;
  hours = 0;
  minutes = 0;
  seconds: number | string;
  subscription: Subscription;

  constructor() {
    this.seconds = 0
    this.subscription = new Subscription();
    const distance = this.getTimeDiff();
    this.buildCountdownString(distance);
  }

  ngOnInit(): void {
    this.subscription = interval( 1000).subscribe(() => {
      const distance = this.getTimeDiff();
      this.buildCountdownString(distance);
    });
  }

  private getTimeDiff(): number {
    const countDownDate = new Date('Jul 23, 2022 14:00:00').getTime();
    const now = new Date().getTime();
    return  countDownDate - now;
  }

  private buildCountdownString(timeDiff: number): void {
    this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    if (this.seconds < 10) {
      this.seconds = '0' + this.seconds;
    }

    // this.countdown = days + ' Tage ' + hours + ' Stunden ' + minutes + ' Minuten ' + seconds + ' Sekunden';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
