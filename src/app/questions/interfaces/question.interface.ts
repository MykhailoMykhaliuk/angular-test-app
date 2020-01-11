import { Entities } from '../enums';

export interface IQuestion {
  id: number;
  alias: string;
  answers: number;
  date: IDate;
  entity: Entities;
  description: IDescription;
  title: string;
  views: number;
  language: ILanguage;
}

export interface IDate {
  created: number;
  viewed: number;
}

export interface IDescription {
  question: string;
  answer: string;
}

export interface ILanguage {
  id: number;
  code: string;
  title: string;
  tooltip: string;
}