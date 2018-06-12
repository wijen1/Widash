import { Injectable } from '@angular/core';
import {Project} from '../models/project';

@Injectable()
export class ProjectService {
  public showSpinner = false;

  constructor() { }

  private projects: Array<Project> = [
    {id: (Date.now() - 10) + '', name: 'Project 1', status: 'active', todoLists: [], noteLists: []},
    {id: (Date.now() - 20) + '', name: 'Project 2', status: 'active', todoLists: [], noteLists: []},
    {id: (Date.now() - 30) + '', name: 'Project 3', status: 'active', todoLists: [], noteLists: []},
    {id: (Date.now() - 40) + '', name: 'Project 4', status: 'done', todoLists: [], noteLists: []}
  ];

  getProjects(): Array<Project> {
    return this.projects;
  }

  getOneProject(id: string): Project {
    return this.projects.find(p => p.id === id);
  }

  addProject(project: Project): Project {
    this.projects.push(project);
    return project;
  }

  removeProject(id: String): Boolean {
    this.projects = this.projects.filter(c => c.id !== id);
    return true;
  }

  showLoadingSpinner() {
    this.showSpinner = true;
  }

  hideLoadingSpinner() {
    this.showSpinner = false;
  }
}
