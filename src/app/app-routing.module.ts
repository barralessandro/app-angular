import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinPageComponent } from './component/join-page/join-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { TemplateDrivenFormComponent } from './component/template-driven-form/template-driven-form.component';
import { UserPageComponent } from './component/user-page/user-page.component';

const routes: Routes = [
  { 
    path: '',   
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  {
    path: "user-home/:id",
    component: UserPageComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "join-us",
    component: JoinPageComponent
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent
  },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
