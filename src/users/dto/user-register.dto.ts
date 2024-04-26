import { IsEmail, IsString } from "class-validator";

export class UserRegisterDto {
  @IsString({ message: "Empty name" })
  name: string;

  @IsEmail({}, { message: "Not correct email" })
  email: string;

  @IsString({ message: "Empty password" })
  password: string;
}
