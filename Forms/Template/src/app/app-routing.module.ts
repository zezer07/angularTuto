import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import {SingleAppareilComponent} from './single-appareil/single-appareil.component'
import {AuthGuard} from './services/auth-guard.service'
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component'
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';




const routes: Routes = [
  { path: 'appareils', canActivate:[AuthGuard], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate:[AuthGuard], component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AuthComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: '**', redirectTo: 'not-found' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
