import { Component, OnInit, ElementRef, Renderer2, HostListener, ViewChild} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CertificateModule } from './certificate.module';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent  implements OnInit {

  scrollAnimationTriggered = false;

  constructor() { }

  ngOnInit() {}

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
