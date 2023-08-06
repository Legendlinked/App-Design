import { Component, OnInit, ElementRef, Renderer2, HostListener, ViewChild} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomePageModule } from './home.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    //Innit:
    vedioSection: any;
    startY = 0;
    scrollAnimationTriggered = false;

  ngOnInit() {
    this.playVideo();
    this.vedioSection = document.getElementById('video-background');
    setTimeout(() => {
      const scrollTargetElement = document.getElementById('here');
      if (scrollTargetElement) {
        scrollTargetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 5000); // 5000 milliseconds = 5 seconds
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

  constructor() {
    this.alwaysloop();
  }

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

  async alwaysloop() {
    await setTimeout(() => {
      this.alwaysloop();
    }, 1000);
  }

  menuItemClicked(item:number){
    
  }



  //Mouse Scroll Wheel
  @HostListener("wheel", ["$event"])
  scrolling(event: WheelEvent) {
    console.log("you are scrolling");
  }
  @HostListener('touchmove', ['$event'])
  moving(event: WheelEvent) {
    if (this.vedioSection) {
      console.log("you are moving");
    }

  }

}