import { Component } from '@angular/core';
import { SpinningBadgeComponent } from '../spinning-badge/spinning-badge.component';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SpinningBadgeComponent, CountdownTimerComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  ticketLines = Array.from({ length: 20 });
}
