import { Binary } from '@angular/compiler';
import { Byte } from '@angular/compiler/src/util';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  passwordSalt: string;
  status: boolean;
}