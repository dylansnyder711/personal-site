import { Component, OnInit } from '@angular/core';

import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor() {}

  ngOnInit(): void {
    this.projects.push({
      image: '/assets/images/projects/jme-construction.PNG',
      link: 'https://jmeconstructionllc.com/',
      name: 'JME Construction',
      description:
        'Wordpress business website for a small roofing company in Fremont, Nebraska',
    });
    this.projects.push({
      image: '/assets/images/projects/nadgwick-painting.PNG',
      link: 'https://nadgwickpainting.com/',
      name: 'Nadgwick Painting and Remodelling',
      description:
        'Wordpress business website for a small painting company in Omaha, Nebraska',
    });
    this.projects.push({
      image: '/assets/images/projects/blackwell-roofing.PNG',
      link: 'https://blackwellroofing.com/',
      name: 'Blackwell Roofing',
      description:
        'Wordpress business website for a small roofing company with offices in Omaha, Nebraska and Kansas City, Kansas',
    });
  }
}
