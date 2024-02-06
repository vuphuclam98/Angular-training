import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterAccountComponent } from './auth/register-account/register-account.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/edit', component: HomeComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
