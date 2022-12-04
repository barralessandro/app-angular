import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { JoinPageComponent } from './component/join-page/join-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { UserPageComponent } from './component/user-page/user-page.component';
import { BookListingComponent } from './component/book-listing/book-listing.component';
import { MenuComponent } from './component/menu/menu.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { AboutUsComponent } from './component/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ResetPasswordComponent,
    JoinPageComponent,
    LoginPageComponent,
    UserPageComponent,
    BookListingComponent,
    MenuComponent,
    HomepageComponent,
    CarouselComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // from '@angular/platform-browser/animations';
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
