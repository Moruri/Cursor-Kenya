import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  templateUrl: './countdown-timer.component.html',
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  days = signal(0);
  hours = signal(0);
  minutes = signal(0);
  seconds = signal(0);

  private intervalId: ReturnType<typeof setInterval> | null = null;
  private readonly targetDate = new Date('2026-04-11T14:00:00');

  ngOnInit() {
    this.calculateTimeLeft();
    this.intervalId = setInterval(() => this.calculateTimeLeft(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private calculateTimeLeft() {
    const now = new Date();

    if (now >= this.targetDate) {
      this.days.set(0);
      this.hours.set(0);
      this.minutes.set(0);
      this.seconds.set(0);
      return;
    }

    const diff = this.targetDate.getTime() - now.getTime();
    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    this.days.set(Math.floor(totalHours / 24));
    this.hours.set(totalHours % 24);
    this.minutes.set(totalMinutes % 60);
    this.seconds.set(totalSeconds % 60);
  }
}
