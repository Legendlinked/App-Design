import { Component, HostListener, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { GestureController, Gesture, GestureDetail } from '@ionic/angular';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('rotateLogo', [
      transition('* => rotateRight', [
        animate('0.3s', style({ transform: 'rotate(90deg)' })),
      ]),
      transition('* => rotateUp', [
        animate('0.3s', style({ transform: 'rotate(-90deg)' })),
      ]),
      transition('* => rotateDown', [
        animate('0.3s', style({ transform: 'rotate(180deg)' })),
      ]),
      transition('* => rotateLeft', [
        animate('0.3s', style({ transform: 'rotate(-90deg)' })),
      ]),
    ]),
  ],
})
export class HomePage implements OnInit {

  ngOnInit() {
    this.playVideo();
    this.setupSwipeGesture();
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

  constructor(
    private gestureCtrl: GestureController,
    private elementRef: ElementRef<HTMLElement>
  ) {}

  setupSwipeGesture() {
    const gesture: Gesture = this.gestureCtrl.create({
      el: this.elementRef.nativeElement.querySelector('.logo')!,
      gestureName: 'swipe',
      threshold: 0, // Adjust this value to control how much the user has to swipe to trigger movement
      onStart: (ev: GestureDetail) => {
        // Detect initial angle when the swipe starts
        const angle = this.calculateAngle(ev);
        this.applyRotation(angle);
      },
    });

    gesture.enable(true);
  }

  calculateAngle(ev: GestureDetail): number {
    // Calculate the angle of the swipe gesture in degrees
    const x = ev.currentX - ev.startX;
    const y = ev.currentY - ev.startY;
    const radians = Math.atan2(y, x);
    const degrees = (radians * 180) / Math.PI;
    return degrees;
  }

  applyRotation(angle: number) {
    // Apply the appropriate animation based on the swipe direction
    if (angle >= -45 && angle < 45) {
      this.rotateLogo('rotateRight');
    } else if (angle >= 45 && angle < 135) {
      this.rotateLogo('rotateUp');
    } else if (angle >= 135 || angle < -135) {
      this.rotateLogo('rotateDown');
    } else if (angle >= -135 && angle < -45) {
      this.rotateLogo('rotateLeft');
    }
  }

  rotateLogo(animation: string) {
    const logoElement = this.elementRef.nativeElement.querySelector('.logo') as HTMLElement;
    logoElement.style.animation = '';
    void logoElement.offsetWidth; // Trigger reflow to reset the animation
    logoElement.style.animation = `0.3s ${animation}`;
  }
}
