import {ToDoItem} from './toDoItem';

export class ToDo {
  constructor() {
    this.id = Date.now().toString();
  }

  id: string;
  name: string;
  toDoItems: Array<ToDoItem>;
}
