import { Injectable } from '@angular/core';
import { AbstractDataService } from '../../../list/list.module';
import { IQuestionData, IQuestion } from '../../interfaces';

export interface IQuestionResponse {
  code: number;
  message: string;
  data: IQuestionData;
}

@Injectable()
export class DataService extends AbstractDataService {
  getPreparedData({ data }: IQuestionResponse): IQuestion[] {
    return data.list;
  }
}
