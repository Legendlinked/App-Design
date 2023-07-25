import { Component, HostListener, OnInit, ViewChild} from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  ngOnInit() {
    this.playVideo();
  }
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    this.playVideo();
  }

  playVideo() {
    const video: any = document.querySelector('.video-background video');
    if (video && video.paused) {
      video.muted = true;
      video.autoplay = true;
      video.playsinline = true;
      video.play();
    }
  }

  constructor() {}

 
  
}
