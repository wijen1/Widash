import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../models/project';

@Component({
  selector: 'app-side-sub-nav',
  templateUrl: './side-sub-nav.component.html',
  styleUrls: ['./side-sub-nav.component.scss']
})
export class SideSubNavComponent implements OnInit {
  @Input() projects: Array<Project>;
  private orderedProjects = {};

  constructor() { }

  ngOnInit() {
    this.projects.forEach(p => {
      if (!this.orderedProjects[p.status]) {
        this.orderedProjects[p.status] = [];
      }
      this.orderedProjects[p.status].push(p);
    });

    // console.log(this.orderedProjects);
    // console.log(this.projects);
  }

  getProjectTypes(): Array<string> {
    return Object.keys(this.orderedProjects);
  }
}

