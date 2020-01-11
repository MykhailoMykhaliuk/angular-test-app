import { Component, OnInit, OnDestroy, Inject, ContentChild, TemplateRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { map, finalize, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { IQueryParams, IPaginationConfig } from '../../interfaces';
import { ApiService, PaginationService, QueryParamsService } from '../../services';
import { DataService } from '../../di-tokens';

@Component({
  selector: 'la-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit, OnDestroy {
  items: any[] = [];
  totalCount: number;
  queryParams: IQueryParams;
  paginationConfig: IPaginationConfig;
  loading = true;

  @ContentChild('customListItem', { static: true }) customListItem: TemplateRef<any>;

  private subscription: Subscription;
  
  constructor(
    private apiService: ApiService,
    private paginationService: PaginationService,
    private queryParamsService: QueryParamsService,
    @Inject(DataService) private dataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.observeQueryParams();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  observeQueryParams() {
    this.subscription = this.route.queryParams
      .pipe(
        map((queryParams: IQueryParams) => this.queryParamsService.normalizeQueryParams(queryParams, this.totalCount)),
        tap((queryParams: IQueryParams) => { this.setRouterParams(queryParams) }),
        tap((queryParams: IQueryParams) => {
          this.queryParams = queryParams;
          this.paginationConfig = this.paginationService.getPaginationConfig(this.paginationConfig, queryParams);
        })
      )
      .subscribe(this.fetchItems.bind(this));
  }

  fetchItems(queryParams: IQueryParams): void {
    this.loading = true;

    this.apiService.getList(queryParams)
      .pipe(
        tap(({ data }) => { this.totalCount = data.total; }),
        map(data => this.dataService.getPreparedData(data)),
        finalize(() => { this.loading = false; })
      )
      .subscribe((items: any) => {
        this.items = items;
      });
  }

  onSortingChanged(sortBy: string): void {
    this.setRouterParams({ ...this.queryParams, sortBy });
  }

  onPaginationChanged({ pageSize, pageIndex }: PageEvent): void {
    this.setRouterParams({ ...this.queryParams, perPage: pageSize, page: pageIndex });
  }

  private setRouterParams(queryParams: IQueryParams): void {
    this.router.navigate([''], { queryParams });
  }
}
