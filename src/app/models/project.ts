import {ToDoItem} from './toDoItem';

export class Project {
  id: string;
  name: string;
  todoItems: Array<ToDoItem>;
}
