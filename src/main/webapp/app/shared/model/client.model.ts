import { Moment } from 'moment';

export interface IClient {
  id?: number;
  name?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  countryCode?: string;
  birthDate?: Moment;
}

export class Client implements IClient {
  constructor(
    public id?: number,
    public name?: string,
    public middleName?: string,
    public lastName?: string,
    public email?: string,
    public phone?: string,
    public countryCode?: string,
    public birthDate?: Moment
  ) {}
}
