import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { AuthGuard } from './services/auth-guard.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import{UserService} from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component'
import{CommonModule} from '@angular/common'
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    NewUserComponent,
  UserListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  
  ],
  providers: [AppareilService,AuthService,AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
