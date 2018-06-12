import {ToDo} from './to-do';
import {Note} from './note';

export class Project {
  constructor(name: string, status: string, id?: string, todoLists?: Array<ToDo>, noteLists?: Array<Note>) {
    if (!id) {
      this.id = Date.now().toString();
    } else {
      this.id = id;
    }
    this.name = name;
    this.status = status;
    this.noteLists = noteLists;
    this.todoLists = todoLists;
  }

  id: string;
  name: string;
  todoLists: Array<ToDo>;
  noteLists: Array<Note>;
  status: string;
}
