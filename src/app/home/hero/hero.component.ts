import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent{

  viewMyWork() {
    window.open('#achievement'); // Open in a new tab
  }

  // Function to handle LinkedIn button click
  openLinkedIn() {
    window.open('https://www.linkedin.com/in/mohammed-ezzelrgal/', '_blank'); // Open LinkedIn profile
  }

}
