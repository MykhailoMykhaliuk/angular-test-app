import { Injectable, Inject } from '@angular/core';
import { SortService } from '../sort/sort.service';
import { PaginationService } from '../pagination/pagination.service';
import { SortConfig } from '../../di-tokens';
import { IQueryParams } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class QueryParamsService {
  constructor(
    private sortService: SortService,
    private paginationService: PaginationService,
    @Inject(SortConfig) protected sortConfigs
  ) { }

  normalizeQueryParams({ sortBy, page, perPage }: IQueryParams, totalCount: number): IQueryParams {
    return {
      sortBy: this.isValidSortByConfig(sortBy) ? sortBy : this.sortService.defaultSortConfig.config,
      page: this.isValidPageIndexConfig(page, perPage, totalCount) ? page : 0,
      perPage: this.isValidPerPageConfig(perPage) ? perPage : this.paginationService.defaultPageSize
    };
  }

  private isValidSortByConfig(sortBy: string): boolean {
    return Boolean(this.sortService.findSortConfig(this.sortConfigs, sortBy));
  }

  private isValidPageIndexConfig(pageIndex: number, perPage: number, totalCount: number): boolean {
    return pageIndex && perPage && (pageIndex * perPage) <= totalCount + perPage;
  }

  private isValidPerPageConfig(perPage: number): boolean {
    const pageSizeOptions = this.paginationService.defaultPaginationConfig.pageSizeOptions;
    return Boolean(perPage && pageSizeOptions.find(pageSize => pageSize.toString() === perPage.toString()));
  }
}
