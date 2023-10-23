import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './services/guards/auth.guard';
import { MyTodosComponent } from './components/todos/my-todos/my-todos.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

const routes: Routes = [
  {path: '', component:LandingComponent, data: {index: 0}},
  {path: 'login', component: LoginComponent, data: {index: 1}},
  {path: 'signup', component: SignupComponent, data: {index: 2}},
  {path: 'my-todos', component: MyTodosComponent, canActivate: [authGuard], data: {index: 3}},
  {path: 'login/forget-password', component: ForgetPasswordComponent},
  //{path: 'cart', component: CartComponent, canActivate: [authGuard], data: {index: 4}}, // Else routes is a task
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
