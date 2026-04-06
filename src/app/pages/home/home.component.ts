import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CommunityPhotoComponent } from '../../components/community-photo/community-photo.component';
import { SponsorsComponent } from '../../components/sponsors/sponsors.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CommunityPhotoComponent, SponsorsComponent],
  template: `
    <app-hero />
    <app-community-photo />
    <app-sponsors />
  `,
})
export class HomeComponent {}
