import { Component, OnInit, ElementRef, Renderer2, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  ngOnInit() {
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

  public scrollAnimationTriggered = false;

  constructor() {}

  onScroll(event: any) {
    if (!this.scrollAnimationTriggered) {
      const element = document.querySelector('.scroll-text');
      console.log(this.scrollAnimationTriggered)
      if (element instanceof HTMLElement) {
        const elementOffset = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementOffset < screenHeight * 0.75) {
          this.scrollAnimationTriggered = true;
        }
      }
    }
    console.log(this.scrollAnimationTriggered)
  }
}