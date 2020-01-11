export interface IPaginationConfig {
  pageIndex: number;
  pageSize: number;
  pageSizeOptions: number[];
}

export interface IPagination {
  page: number;
  pages: number;
  items: number;
  limit: number;
}