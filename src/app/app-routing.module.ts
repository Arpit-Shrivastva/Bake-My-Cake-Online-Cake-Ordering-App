import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CakeViewComponent } from './cake-view/cake-view.component';
import { CakeViewService } from './services/cake-view.service';
import { AboutComponent } from './about/about.component';
import { ContanctUsComponent } from './contanct-us/contanct-us.component';
import { LoginComponent } from './login/login.component';
import { CakeRequestComponent } from './cake-request/cake-request.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CakeLoginService } from './services/cake-login.service';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cake-request', component: CakeRequestComponent, canActivate: [CakeLoginService] },
  { path: 'cake-view/:id', component: CakeViewComponent, canDeactivate: [CakeViewService] },
  { path: 'About-us', component: AboutComponent },
  { path: 'contanct-us', component: ContanctUsComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
