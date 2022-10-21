export default class Game {
  private categories: { id: number, primary: boolean }[] = [];
  constructor(readonly name: string) { }

  public addCategory(id: number, primary: boolean) {
    const hasPrimaryCategory = this.categories.some((c) => c.primary === true);
    if (primary === true && hasPrimaryCategory) throw new Error('Primary category already been defined');
    this.categories.push({ id, primary });
  }

  public getCategories() {
    return this.categories;
  }
}