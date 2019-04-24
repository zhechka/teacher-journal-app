export class Subject {
  constructor(
    public subject: string,
    public teacher: string,
    public cabinet?: number,
    public description?: string,
    public marks?: object
  ) {}
}
