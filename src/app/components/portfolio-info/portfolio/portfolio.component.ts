import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

class Entry {
  constructor(
    private entry: string,
    private date: string,
    private title: string,
    private content: string
  ) {}
}

class Skill {
  constructor(public skill: string, public experience: string) {}
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  faArrowRight = faArrowRight;
  educationEntries: Entry[] = [];
  certEntries: Entry[] = [];
  experienceEntries: Entry[] = [];

  skills: Skill[] = [];

  constructor() {}

  ngOnInit(): void {
    this.educationEntries.push(
      new Entry(
        'University of Nebraska, Omaha',
        'Aug 2014 - Dec 2019',
        'B.A., Computer Science',
        'The Computer Science curriculum was primarily taught using Java. During the last three semesters, group projects tended to be web based using Java, javascript, CSS, and HTML.'
      )
    );
    this.certEntries.push(
      new Entry(
        'Udemy',
        'Sept 2020',
        'Angular & NodeJS - The MEAN Stack Guide [2020 Edition]',
        'This class, taught by Maximilian Schwarzmuller, was an excellent introduction to the Angular framework. The curriculum involved Components, Directives, Services, Routing, Observables, Http requests, and much more.'
      )
    );
    this.certEntries.push(
      new Entry(
        'Udemy',
        'Sept 2020',
        'Angular - The Complete Guide [2020 Edition]',
        'This class, taught by Maximilian Schwarzmuller, introduced the MEAN Stack (MongoDB, Express, Angular, NodeJS). The lectures went over how to create and deploy a full stack application as well as create and manage a basic API.'
      )
    );
    this.experienceEntries.push(
      new Entry(
        'Independent Contractor',
        'Apr 2020 - current',
        'Freelance Web Developer',
        'Work with small businesses in and around the Omaha area to purchase domains, host, design and create Wordpress sites.'
      )
    );
    this.experienceEntries.push(
      new Entry(
        'Nadgwick Painting and Remodelling LLC',
        'June 2015 - current',
        'Painting Contractor',
        'Discuss and complete framing and painting projects with homeowners in and around the Omaha area. The company specializes in exterior residential painting.'
      )
    );
    this.experienceEntries.push(
      new Entry(
        'gWorks',
        'Nov 2019 - Feb 2020',
        'Web Development Intern',
        'Worked in an agile development team to continuously add features to an existing codebase. The application is built using .NET, my task was to build Grafana dashboards using Elasticsearch queries to better visualize application and server data.'
      )
    );
    this.experienceEntries.push(
      new Entry(
        'Senior Capstone',
        'Aug 2019 - Dec 2019',
        'Omaha Game Jam Web Application',
        'Worked as part of a five man team to create a web application that would simplify updating information for an admin user hosting game jam events. Efficiently designated work to each member of the team to take advantage of different strengths and weaknesses with regard to frontend and backend knowledge.'
      )
    );

    this.skills.push(new Skill('Github', '2-3'));
    this.skills.push(new Skill('CSS', '2-3'));
    this.skills.push(new Skill('HTML', '2-3'));
    this.skills.push(new Skill('Java', '2-3'));
    this.skills.push(new Skill('Javascript', '1-2'));
    this.skills.push(new Skill('SQL', '1-2'));
    this.skills.push(new Skill('Bootstrap', '1-2'));
    this.skills.push(new Skill('Angular', '0-1'));
    this.skills.push(new Skill('Typescript', '0-1'));
    this.skills.push(new Skill('NodeJS', '0-1'));
    this.skills.push(new Skill('C#', '0-1'));
    this.skills.push(new Skill('.NET', '0-1'));
    this.skills.push(new Skill('Elasticsearch', '0-1'));
    this.skills.push(new Skill('Grafana', '0-1'));
  }
}
