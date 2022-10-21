export default class User {
  private id?: string;
  private fullname: string;
  private email: string;
  private password: string;
  private nickname: string;
  private role;

  constructor(fullname: string, email: string, password: string, nickname: string) {
    if (!this.emailIsValid(email)) throw new Error('Invalid Email');
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    this.nickname = nickname;
    this.role = 'member';
  }

  private emailIsValid(email: string) {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    return regex.test(email);
  }
}