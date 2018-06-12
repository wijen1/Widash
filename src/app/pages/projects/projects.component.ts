import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  orderedProjects = {};

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().forEach(p => {
      if (!this.orderedProjects[p.status]) {
        this.orderedProjects[p.status] = [];
      }
      this.orderedProjects[p.status].push(p);
    });
  }

  getProjectTypes(): Array<string> {
    return Object.keys(this.orderedProjects);
  }
}
