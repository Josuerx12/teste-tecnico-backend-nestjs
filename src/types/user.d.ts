/* eslint-disable @typescript-eslint/no-unused-vars */
import { IUser } from 'src/interfaces/User';

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}
