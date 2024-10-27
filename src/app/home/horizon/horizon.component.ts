import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HorizonProject {
  title: string;
  role: string;
  overview: string;
  logo: string;
}


@Component({
  selector: 'app-horizon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horizon.component.html',
  styleUrl: './horizon.component.css'
})
export class HorizonComponent {
  horizonProjects: HorizonProject[] = [
    {
      title: 'Do-Launch',
      role: 'Space Project Manager',
      overview: 'Developing innovative systems for deorbiting satellites, addressing the issue of space debris.',
      logo: 'assets/images/Horizon/LOGO[1].png'
    },
    {
      title: 'NPoC for Egypt – SGAC',
      role: 'National Point of Contact',
      overview: 'Representing Egypt in the Space Generation Advisory Council, coordinating initiatives and engaging with the space community.',
      logo: 'assets/images/Horizon/SGAC.png'
    }
  ];
}
