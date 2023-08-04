import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CertificateComponent } from './certificate.component';


@NgModule({
  declarations: [CertificateComponent],
  imports: [IonicModule], // Add IonicModule here
  exports: [CertificateComponent],
})
export class CertificateModule {}