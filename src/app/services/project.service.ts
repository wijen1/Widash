import { Injectable } from '@angular/core';
import {Project} from '../models/project';
import {ToDoItemStatus} from '../models/toDoItem';

@Injectable()
export class ProjectService {
  public showSpinner = false;

  constructor() { }

  private projects: Array<Project> = [
    {id: (Date.now() - 10) + '', name: 'Project 1', status: 'active',
      todoLists: [
        {id: 't1', name: 'ToDo 1', toDoItems: [
            {id: 'ti1', task: 'Do something, this is active 123', status: ToDoItemStatus.ACTIVE},
            {id: 'ti2', task: 'Do something, this is done', status: ToDoItemStatus.DONE},
            {id: 'ti3', task: 'Do something, this is pending', status: ToDoItemStatus.PENDING},
            {id: 'ti4', task: 'Do something, this is active 321', status: ToDoItemStatus.ACTIVE}
        ]}
      ],
      noteLists: [
        {id: 'n1', name: 'Notes 1', content: 'This is my test note in notes 1'},
        {id: 'n2', name: 'Notes 2', content: 'This is my test note in notes 2'}
      ]
    },
    {id: (Date.now() - 20) + '', name: 'Project 2', status: 'active',
      todoLists: [
        {id: 't2', name: 'My ToDo', toDoItems: [
            {id: 'ti5', task: 'This is the first todo 123', status: ToDoItemStatus.ACTIVE},
            {id: 'ti6', task: 'This is the second todo', status: ToDoItemStatus.DONE},
            {id: 'ti7', task: 'This is the last todo', status: ToDoItemStatus.ACTIVE}
          ]}
      ],
      noteLists: [
        {id: 'n3', name: 'My notes', content: 'This is my test note in notes 1'},
      ]
    },
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
