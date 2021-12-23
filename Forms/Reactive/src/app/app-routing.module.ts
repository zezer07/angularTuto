import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import {SingleAppareilComponent} from './single-appareil/single-appareil.component'
import {AuthGuard} from './services/auth-guard.service'
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component'
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import {UserListComponent} from './user-list/user-list.component'
import{CommonModule} from '@angular/common'
import { NewUserComponent } from './new-user/new-user.component'



const routes: Routes = [
  { path: 'appareils', canActivate:[AuthGuard], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate:[AuthGuard], component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AuthComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '**', redirectTo: 'not-found' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
