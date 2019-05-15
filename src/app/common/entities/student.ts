export class Student {
  constructor(
    public index: string,
    public name: string,
    public lastName: string,
    public id?: number,
    public address?: string,
    public about?: string
  ) {}
}
