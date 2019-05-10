import { Subject } from './subject';

export class Student {
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public address?: string,
    public about?: string,
    public subjects?: Subject[]
  ) {}
}
