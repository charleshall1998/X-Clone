import { Component } from '@angular/core';
import { NavBarComponent } from './shared/layout/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { PostListComponent } from "./features/post-list/post-list.component";
import { HomeComponent } from "./features/home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NavBarComponent, FooterComponent, CommonModule, RouterOutlet, RouterLink, RouterLinkActive, PostListComponent, HomeComponent]
})
export class AppComponent {
  title = 'x-clone';
}
