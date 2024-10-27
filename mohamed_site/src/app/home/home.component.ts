import { Component } from '@angular/core';
import { AboutComponent } from "./about/about.component";
import { HeroComponent } from "./hero/hero.component";
import { AchievementsComponent } from "./achivements/achivements.component";
import { HorizonComponent } from "./horizon/horizon.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, HeroComponent, AchievementsComponent, HorizonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
