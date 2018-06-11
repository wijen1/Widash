import { Injectable } from '@angular/core';
import {Project} from '../models/project';

@Injectable()
export class ProjectService {
  constructor() { }

  private projects: Array<Project> = [
    new Project('Project 1', 'active', (Date.now() - 1) + ''),
    new Project('Project 2', 'active', (Date.now() - 2) + ''),
    new Project('Project 3', 'active', (Date.now() - 3) + ''),
    new Project('Project 4', 'done', (Date.now() - 4) + '')
  ];

  getProjects(): Array<Project> {
    return this.projects;
  }

  addProject(project: Project): Project {
    this.projects.push(project);
    return project;
  }

  removeProject(id: String): Boolean {
    this.projects = this.projects.filter(c => c.id !== id);
    return true;
  }
}
