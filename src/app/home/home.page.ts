import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  ViewChild,
  ViewEncapsulation,
  AfterContentChecked,
} from '@angular/core';
import { Platform, IonRouterOutlet } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  featuredSlides: { title: string; type: string }[] = [
    {
      title: 'Announcement',
      type: '*DEAR CUSTOMERS, WE ARE CURRENTLY OPERATING UNDER LIMITED HOURS OF 4AM-2AM NEXT DAY* Fast and affordable airport parking. Conveniently Servicing: Orlando International Airport (MCO) Now Offering Boat and Trailer Storage.',
    },
    { title: 'Deal', type: 'Super Saver Monthly Pass @$125' },
  ];

  //Innit:
  vedioSection: any;
  startY = 0;
  // scrollAnimationTriggered = false;

  ngOnInit() {
    this.playVideo();
    this.vedioSection = document.getElementById('video-background');
    // setTimeout(() => {
    //   const scrollTargetElement = document.getElementById('here');
    //   if (scrollTargetElement) {
    //     scrollTargetElement.scrollIntoView({ behavior: 'smooth' });
    //   }
    // }, 5000); // 5000 milliseconds = 5 seconds
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

  constructor(
    private platform: Platform,
    private routerOutlet: IonRouterOutlet
  ) {
    this.alwaysloop();
  }

  handleSwipe(event: any) {
    // Prevent swipe-to-go-back gesture
    event.preventDefault();
  }

  ionViewDidEnter() {
    this.platform.backButton.subscribeWithPriority(0, () => {});
    this.routerOutlet.swipeGesture = false;
  }

  ionViewDidLeave() {
    this.routerOutlet.swipeGesture = true;
  }

  // onScroll(event: any) {
  //   if (!this.scrollAnimationTriggered) {
  //     const element = document.querySelector('.scroll-text');
  //     console.log(this.scrollAnimationTriggered)
  //     if (element instanceof HTMLElement) {
  //       const elementOffset = element.getBoundingClientRect().top;
  //       const screenHeight = window.innerHeight;

  //       if (elementOffset < screenHeight * 0.75) {
  //         this.scrollAnimationTriggered = true;
  //       }
  //     }
  //   }
  //   console.log(this.scrollAnimationTriggered)
  // }

  async alwaysloop() {
    await setTimeout(() => {
      this.alwaysloop();
    }, 1000);
  }

  menuItemClicked(item: number) {}

  //Mouse Scroll Wheel
  @HostListener('wheel', ['$event'])
  scrolling(event: WheelEvent) {
    console.log('you are scrolling');
  }
  @HostListener('touchmove', ['$event'])
  moving(event: WheelEvent) {
    if (this.vedioSection) {
      console.log('you are moving');
    }
  }
}
