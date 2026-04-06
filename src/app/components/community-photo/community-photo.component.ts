import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-community-photo',
  standalone: true,
  templateUrl: './community-photo.component.html',
})
export class CommunityPhotoComponent {
  showVideo = signal(false);

  playVideo() {
    this.showVideo.set(true);
  }

  closeVideo() {
    this.showVideo.set(false);
  }
}
