import { Injectable } from '@nestjs/common';

import { Prisma, User } from '@prisma/client';

import { IRepository } from '@src/common/interfaces/i-repository.interface';
import { PrismaService } from '@src/prisma/prisma.service';

@Injectable()
export class UsersRepository implements IRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }
}
