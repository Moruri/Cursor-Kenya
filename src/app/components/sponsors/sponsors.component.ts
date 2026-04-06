import { Component } from '@angular/core';

interface Sponsor {
  name: string;
  logo: string;
  url: string;
  classes: string;
}

@Component({
  selector: 'app-sponsors',
  standalone: true,
  templateUrl: './sponsors.component.html',
})
export class SponsorsComponent {
  sponsors: Sponsor[] = [
    { name: 'Cursor', logo: 'assets/images/sponsors/cursor.svg', url: 'https://cursor.com/', classes: 'w-40 md:w-44' },
    { name: 'GitHub', logo: 'assets/images/sponsors/github.png', url: 'https://github.com/', classes: 'w-16 md:w-20 rounded-full' },
  ];
}
