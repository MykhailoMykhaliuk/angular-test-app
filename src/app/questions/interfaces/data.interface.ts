import { IQuestion } from './question.interface';
import { IFilter } from './filters.interface';

export interface IQuestionData {
  total: number;
  list: IQuestion[];
  pagination: IPagination;
  filters: IFilter;
}

export interface IPagination {
  page: number;
  pages: number;
  items: number;
  limit: number;
}