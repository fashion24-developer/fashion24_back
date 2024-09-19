import { FANCY_FIND_ALL_SELECT } from '@src/api/fancy/constants/fancy-find-all-select.const';
import { FancyEntity } from '@src/api/fancy/entity/fancy.entity';
import { FancyOrderBy } from '@src/api/fancy/enums/fancy-orderby.enum';
import { FancyProductStatus } from '@src/api/fancy/enums/fancy-product-status.enum';
import { SortOption } from '@src/common/enums/sort-option.enum';
import { IRepository } from '@src/common/interfaces/i-repository.interface';
import { ValueOf } from '@src/common/types/common.type';

export interface IFancyRepository extends IRepository<FancyEntity> {
  create(data: FancyEntity): Promise<FancyEntity>;
  findOneById(id: number): Promise<any>;
  findAllForPagination(
    where: {
      name: { contains: string };
      status: ValueOf<typeof FancyProductStatus>;
      AND: (
        | { fancyOptions: { some: { option: { id: number } } } }
        | { fancySubOptions: { some: { subOption: { id: number } } } }
        | { looks: { some: { id: number } } }
        | { tags: { some: { id: number } } }
      )[];
    },
    select: typeof FANCY_FIND_ALL_SELECT,
    skip: number,
    take: number,
    orderBy: { [K in ValueOf<typeof FancyOrderBy>]?: ValueOf<typeof SortOption> }
  ): Promise<FancyEntity[]>;
  update(data: any): Promise<any>;
  count(where: {
    name: { contains: string };
    status: ValueOf<typeof FancyProductStatus>;
    AND: (
      | { fancyOptions: { some: { option: { id: number } } } }
      | { fancySubOptions: { some: { subOption: { id: number } } } }
      | { looks: { some: { id: number } } }
      | { tags: { some: { id: number } } }
    )[];
  }): Promise<number>;
}
