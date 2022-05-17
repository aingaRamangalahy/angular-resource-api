export class CreateUserDto {
  readonly givenName: string;
  readonly familyName: string;
  readonly email: string;
  readonly password: string;
  readonly role: string;
}
