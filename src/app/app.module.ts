import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CakeCardComponent } from './cake-card/cake-card.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { CakeViewComponent } from './cake-view/cake-view.component';
import { ProductService } from './services/product.service';
import { CakeViewService } from './services/cake-view.service';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContanctUsComponent } from './contanct-us/contanct-us.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { LoginComponent } from './login/login.component';
import { CakeRequestComponent } from './cake-request/cake-request.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AuthService } from './services/auth.service';
import { CakeLoginService } from './services/cake-login.service';
import { CakeRequestService } from './services/cake-request.service';
import { FaqComponent } from './faq/faq.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    CakeCardComponent,
    SearchComponent,
    CakeViewComponent,
    FooterComponent,
    AboutComponent,
    ContanctUsComponent,
    LoginComponent,
    CakeRequestComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatSnackBarModule,
    MatTableModule,
    HttpClientModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [ProductService, CakeViewService, AuthService, CakeLoginService, CakeRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
