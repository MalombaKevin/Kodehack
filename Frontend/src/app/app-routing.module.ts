import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebugPageComponent } from './Components/debug-page/debug-page.component';
import { HomeComponent } from './Components/home/home.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [

  {path:'', component:LandingPageComponent},
  {path:'home', component:HomeComponent},
  {path:'profile', component:ProfileComponent},
  {path:'debug', component:DebugPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
