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

export const todos = [
  new Todo("Buy bread", "Whole grain from the cereal aisle", false),
  new Todo("Buy cereal", "Corn flakes, Kellogs brand", false),
  new Todo("Get Amazon package", "From the locker @ the gas station", true),
]
