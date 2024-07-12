import { Prisma } from '@prisma/client';

export class Locale implements Prisma.LocaleUncheckedCreateInput {
  name: string;
  city: string;
  state: string;
}
