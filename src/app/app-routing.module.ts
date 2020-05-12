import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
