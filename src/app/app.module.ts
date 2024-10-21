import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from "./shared/layout/nav-bar/nav-bar.component";
import { FooterComponent } from "./shared/layout/footer/footer.component";
import { PostListComponent } from "./features/post-list/post-list.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarComponent,
    FooterComponent,
    PostListComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
