export class Note {
  constructor() {
    this.id = Date.now().toString();
  }

  id: string;
  name: string;
  content: string;
}
