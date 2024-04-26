import { hash } from "bcryptjs";

export class User {
  private _password: string;

  constructor(
    private readonly _email: string,
    private readonly _name: string
  ) {}

  getEmail(): string {
    return this._email;
  }

  getName(): string {
    return this._name;
  }

  getPassword(): string {
    return this._password;
  }

  public async setPassword(pass: string): Promise<void> {
    this._password = await hash(pass, 10);
  }
}
