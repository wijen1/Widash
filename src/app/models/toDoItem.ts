export class ToDoItem {
  constructor() {
    this.id = Date.now().toString();
  }

  id: string;
  task: string;
  status: ToDoItemStatus;
}

export enum ToDoItemStatus {
  DONE, ACTIVE, PENDING
}
