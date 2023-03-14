import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './Components/add-question/add-question.component';
import { AdminComponent } from './Components/Admin/admin/admin.component';
import { AnalyticsComponent } from './Components/Admin/analytics/analytics.component';
import { QuestionsComponent } from './Components/Admin/questions/questions.component';
import { UsersComponent } from './Components/Admin/users/users.component';
import { DebugPageComponent } from './Components/debug-page/debug-page.component';
import { HomeComponent } from './Components/home/home.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { LoginComponent } from './Components/login/login.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AuthGuardService } from './Services/auth-guard.service';
// import { AuthGuardService } from './Services/auth-guard.service';

const routes: Routes = [

  {path:'', loadComponent:()=>import('../app/Components/landing-page/landing-page.component').then(l=>l.LandingPageComponent)},
  {path:'home', canActivate:[AuthGuardService],loadComponent:()=>import('../app/Components/home/home.component').then(l=>l.HomeComponent)},
  {path:'profile', canActivate:[AuthGuardService],loadComponent:()=>import('../app/Components/profile/profile.component').then(l=>l.ProfileComponent)},
  {path:'debug', canActivate:[AuthGuardService], loadComponent:()=>import('../app/Components/debug-page/debug-page.component').then(l=>l.DebugPageComponent)},
  {path:'bug', canActivate:[AuthGuardService], component:AddQuestionComponent},
  {path:'signup', loadComponent:()=>import('../app/Components/signup/signup.component').then(l=>l.SignupComponent)},
  {path:'login', loadComponent:()=>import('./Components/login/login.component').then(l=>l.LoginComponent)},
  {path:'admin', loadComponent:()=>import('../app/Components/Admin/admin/admin.component').then(l=>l.AdminComponent),

  children:[
    {path:'', component:AnalyticsComponent},
    {path:'analytics', component:AnalyticsComponent},
    {path:'users', component:UsersComponent},
    {path:'questions', component:QuestionsComponent} 
  ]
},
{path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
