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
// import { AuthGuardService } from './Services/auth-guard.service';

const routes: Routes = [

  {path:'', component:LandingPageComponent},
  {path:'home', component:HomeComponent},
  {path:'profile', component:ProfileComponent},
  {path:'debug', component:DebugPageComponent},
  {path:'bug', component:AddQuestionComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'bug', component:AddQuestionComponent},
  {path:'admin', component:AdminComponent,

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
