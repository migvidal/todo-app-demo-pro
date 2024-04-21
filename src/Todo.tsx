export class Todo {
  title: string;
  description: string;
  isImportant: boolean;
  constructor(title: string, description: string, isImportant: boolean) {
    this.title = title;
    this.description = description;
    this.isImportant = isImportant;
  }
}

export const sampleTodos = new Set([
  new Todo("This is a reminder", "Also known as a Todo", false),
  new Todo("This is an important reminder", "That's why it shows up in red", true),
])
