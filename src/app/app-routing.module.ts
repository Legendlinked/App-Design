// app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CertificateComponent } from './certifcate/certificate.component';
import { SplashComponent } from './splash/splash.component';
import { HomePage } from './home/home.page';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full' },
  { 
    path: 'splash',
    component: SplashComponent },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'certificate', // Replace with the desired path
    component: CertificateComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
