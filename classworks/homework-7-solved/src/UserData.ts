import { UserGender } from './UserGender';

export interface UserData {
  firstName: string;
  lastName: string;
  middleName: string;
  age: number;
  sex: UserGender;
}
