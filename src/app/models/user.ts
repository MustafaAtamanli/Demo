import { Binary } from '@angular/compiler';
import { Byte } from '@angular/compiler/src/util';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  /* passwordSalt: string; */
  status: boolean;
}