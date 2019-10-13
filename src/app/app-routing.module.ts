import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { YourpostComponent } from './yourpost/yourpost.component';
import { AllpostComponent } from './allpost/allpost.component';
import { MakepostComponent } from './makepost/makepost.component';
import { FullpostComponent } from './fullpost/fullpost.component';
import { GuestComponent } from './guest/guest.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserhomeComponent },
  { path: 'makepost', component: MakepostComponent },
  { path: 'allpost', component: AllpostComponent},
  { path: 'yourpost', component: YourpostComponent },
  { path: 'fullpost', component: FullpostComponent},
  { path: 'guest', component: GuestComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
