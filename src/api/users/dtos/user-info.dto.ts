import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator';

import { UserProvider } from '../enums/user-provider.enum';
import { UserRole } from '../enums/user-role.enum';

export class UserInfoDto {
  @IsNotEmpty()
  @IsString()
  uniqueId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  nickname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  phone?: string;

  @IsNotEmpty()
  @IsEnum(UserProvider)
  provider: UserProvider;

  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole = UserRole.USER;

  @IsNotEmpty()
  @IsNumber()
  rank: number = 1;

  @IsNotEmpty()
  @IsNumber()
  point: number = 0;

  @IsNotEmpty()
  @IsDateString()
  createdAt: Date;

  @IsNotEmpty()
  @IsDateString()
  updatedAt: Date;

  @IsDateString()
  deletedAt: Date;
}
