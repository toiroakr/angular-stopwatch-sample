import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent {
  private time = 0;
  private startAt = 0;
  private watcher: Subscription = null;
  laps: string[] = [];

  start() {
    this.startAt = moment.now() - (this.time - this.startAt);
    this.watcher = Observable.timer(0, 10).subscribe(() => {
      this.time = moment.now();
    });
  }

  stop() {
    this.watcher.unsubscribe();
    this.watcher = null;
  }

  formattedTime(): string {
    return moment(this.time - this.startAt).format('mm:ss.SSS');
  }

  lap() {
    this.laps.push(this.formattedTime());
  }

  clear() {
    this.time = 0;
    this.startAt = 0;
    this.laps = [];
  }

  isWatching(): boolean {
    return this.watcher != null;
  }
}
