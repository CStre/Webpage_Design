export class Person {

  constructor(
    public id: number,
    public name: string,
    public banner: string,
    public email: string,
    public pronoun?: string,
    public other?: string,
    public resident?: string,
    public hall?: string,
    public room?: string
  ) { }

}
