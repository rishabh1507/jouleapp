import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UserService} from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { MakepostComponent } from './makepost/makepost.component';
import { YourpostComponent } from './yourpost/yourpost.component';
import { AllpostComponent } from './allpost/allpost.component';
import { FullpostComponent } from './fullpost/fullpost.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidenavComponent } from './sidenav/sidenav.component';
// import { FilterPipeModule } from 'ngx-filter-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GuestComponent } from './guest/guest.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    MakepostComponent,
    YourpostComponent,
    AllpostComponent,
    FullpostComponent,
    NavigationComponent,
    SidenavComponent,
    GuestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
