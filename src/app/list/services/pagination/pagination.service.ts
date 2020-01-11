import { Injectable } from '@angular/core';
import { IPaginationConfig, IQueryParams } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  readonly defaultPaginationConfig: IPaginationConfig = {
    pageIndex: 1,
    pageSize: 10,
    pageSizeOptions: [10, 20, 50, 100]
  }

  getPaginationConfig(config = this.defaultPaginationConfig, { perPage, page }: IQueryParams): IPaginationConfig {
    return {
      ...config,
      pageIndex: page ? Number(page) : config.pageIndex,
      pageSize: perPage ? perPage : this.defaultPageSize
    }
  }

  get defaultPageSize(): number {
    return this.defaultPaginationConfig.pageSizeOptions[0];
  }
}
