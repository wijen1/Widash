export class ToDoItem {
  id: string;
  task: string;
  status: ToDoItemStatus;
}

export enum ToDoItemStatus {
  DONE, ACTIVE, PENDING
}
