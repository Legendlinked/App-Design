import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  //Innit:
  vedioSection: any;
  startY = 0;

  //Constructors:
  constructor() {
    this.alwaysloop();
  }
  ngOnInit() {
    this.playVideo();
    this.vedioSection = document.getElementById('video-background');
  }

  //Event Listners:
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



  //Scroll Managment:
  async alwaysloop() {


    await setTimeout(() => {
      this.alwaysloop();
    }, 1000);
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
