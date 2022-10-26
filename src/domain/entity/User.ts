import UserRoleTypes from '../../utils/UserRoleTypes';

export default class User {
  readonly id?: number;
  readonly fullname: string;
  readonly email: string;
  readonly password: string;
  readonly nickname: string;
  readonly role;

  constructor(fullname: string, email: string, password: string, nickname: string) {
    if (!this.emailIsValid(email)) throw new Error('Invalid Email');
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    this.nickname = nickname;
    this.role = UserRoleTypes.MEMBER;
  }

  private emailIsValid(email: string) {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    return regex.test(email);
  }
}