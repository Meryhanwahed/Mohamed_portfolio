import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})

export class ServicesComponent {
  services = [
    {
      title: 'Initial Planning',
      subtitle: 'Setting the Foundation',
      description: 'Crafting a clear project roadmap with well-defined goals, timelines, and deliverables to ensure every step is aligned with your vision.',
      hoverText: 'Building the roadmap that guides every success.',
      icon: 'assets/images/services/icon_for_Compass_Map.png' // Use an appropriate icon for Compass or Map
    },
    {
      title: 'Risk Management',
      subtitle: 'Proactively Addressing Challenges',
      description: 'Identifying and mitigating potential risks to keep the project on track. I anticipate challenges, so you don\'t have to worry.',
      hoverText: 'Minimizing risks, maximizing results.',
      icon: 'assets/images/services/Warning_Triangle.png' // Use an appropriate icon for Shield or Warning Triangle
    },
    {
      title: 'Stakeholder Management',
      subtitle: 'Aligning Interests for Seamless Collaboration',
      description: 'Maintaining transparent and productive communication with all stakeholders, ensuring everyone is informed and engaged.',
      hoverText: 'Keeping everyone on the same page.',
      icon: 'assets/images/services/Group_People.png' // Use an appropriate icon for Group or People
    },
    {
      title: 'Progress Control',
      subtitle: 'Steering the Project Forward',
      description: 'Regularly assessing project milestones and adjusting as needed to stay on schedule and within scope.',
      hoverText: 'Real-time insights, optimized progress.',
      icon: 'assets/images/services/timeline.jpg' // Use an appropriate icon for Speedometer or Timeline
    },
    {
      title: 'Process Improvement',
      subtitle: 'Optimizing for Efficiency',
      description: 'Continuously evaluating workflows to identify and implement improvements, enhancing productivity without compromising quality.',
      hoverText: 'Smarter workflows, stronger outcomes.',
      icon: 'assets/images/services/Gear_Tools.png' // Use an appropriate icon for Gear or Tools
    },
    {
      title: 'Final Reporting & Wrap-up',
      subtitle: 'Wrapping Up with Insights',
      description: 'Delivering a comprehensive project report with key learnings, outcomes, and insights, providing a valuable roadmap for future projects.',
      hoverText: 'Completing the journey with clarity and insight.',
      icon: 'assets/images/services/Report.png' // Use an appropriate icon for Checkmark or Report
    },
    {
      title: 'Agile Planning',
      subtitle: 'Flexible, Yet Focused',
      description: 'Developing project plans that are flexible and adaptable to expected changes, with work segmented into manageable phases to ensure goal alignment.',
      hoverText: 'Flexibility that serves your goals, from start to finish.',
      icon: 'assets/images/services/Task Board.jpg' // Use an appropriate icon for Agile Sprint or Task Board
    },
    {
      title: 'Sprint Management',
      subtitle: 'Efficient, Iterative Progress',
      description: 'Managing each sprint as a focused, iterative phase, with regular reviews to ensure continuous improvement and deliver value as quickly as possible.',
      hoverText: 'Accelerating success through consistent achievements.',
      icon: 'assets/images/services/Rocket.jpg' // Use an appropriate icon for Stopwatch or Rocket
    },
    {
      title: 'Agile Stakeholder Communication',
      subtitle: 'Transparency at Every Step',
      description: 'Providing ongoing updates to stakeholders to ensure alignment with the project vision and requirements, easily accommodating project changes.',
      hoverText: 'Clarity and transparency in every step.',
      icon: 'assets/images/services/Communication.png' // Use an appropriate icon for Chat Bubbles or Communication
    }
  ];
}