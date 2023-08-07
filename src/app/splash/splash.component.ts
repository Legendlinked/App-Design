import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { splashScreenModule } from './splash.module';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Wait for 5 seconds and then navigate to the home page  
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 2000); // 5000 milliseconds = 5 seconds
  }
}