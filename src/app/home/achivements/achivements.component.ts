import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Achievement {
  title: string;
  role: string;
  overview: string;
  responsibilities: string[];
  outcome: string;
  logo: string;
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './achivements.component.html',
  styleUrls: ['./achivements.component.css']
})
export class AchievementsComponent {
  achievements: Achievement[] = [
    {
      title: 'Skinmate App Project',
      role: 'Project Manager',
      overview: 'Led the development of the Skinmate App, a mobile application designed to provide personalized skincare recommendations and promote skin health...',
      responsibilities: [
        'Defined project objectives, scope, and deliverables to align with client expectations and market needs.',
        'Conducted risk assessments and developed mitigation strategies...',
      ],
      outcome: 'Successfully launched the Skinmate App...',
      logo: 'assets/images/Achievements/skinmate-logo.png'
    },
    {
      title: 'NASA Space Apps Challenge - Beni Suef',
      role: 'Local Lead',
      overview: 'Organized and led the NASA Space Apps Challenge in Beni Suef, focused on solving real-world challenges using NASA open data.',
      responsibilities: [
        'Planned and coordinated event logistics.',
        'Led a team of volunteers and assigned tasks.',
        'Engaged with stakeholders and secured resources.',
        'Supported participants and facilitated collaboration.',
        'Analyzed feedback for future improvements.',

      ],
      outcome: 'Successfully hosted a diverse event that fostered innovation and strengthened community ties.',
      logo: 'assets/images/Achievements/NasaSpaceApps.png'
    },
    // Add more achievement items here
  ];
}
