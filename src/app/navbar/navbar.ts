import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CertificateComponent } from '../certifcate/certificate.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar implements OnInit {

  constructor(private navCtrl: NavController) {}
  
  ngOnInit() {}

  menuItemClicked(item:number){
    // if (item==1) {
    //   this.navCtrl.navigateForward('/certificate'); // Replace with the actual path to MyNewPage
    // }
  }

}
