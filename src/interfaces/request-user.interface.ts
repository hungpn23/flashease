import { JwtPayload } from '@/types/auth.type';
import { Request } from 'express';

export interface IRequestUser extends Request {
  user: JwtPayload;
}
