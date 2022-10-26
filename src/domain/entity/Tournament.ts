export default class Tournament {
  id?: number | undefined;
  private _MIN_DESCRIPTION = 20;

  constructor(
    readonly name: string,
    readonly description: string,
    readonly gameId: number,
    readonly amount: number,
    readonly date: Date,
    readonly ownerId: number
  ) {
    this.tournamentIsValid();
  }

  private tournamentIsValid() {
    this.verifyDate(this.date);
    this.verifyDescription(this.description);
  }

  private verifyDate(tournamentDate: Date) {
    const createdHour = new Date();
    if (tournamentDate < createdHour) throw new Error('Tournament date is invalid');
  }

  private verifyDescription(description: string) {
    const descLenght = description.length;
    if (descLenght <= this._MIN_DESCRIPTION) throw new Error('Description must be at least 20 characters long');
  }
}