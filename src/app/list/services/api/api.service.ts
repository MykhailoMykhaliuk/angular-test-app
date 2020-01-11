import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IQueryParams } from '../../interfaces';
import { ApiUrlConfig } from '../../di-tokens';

@Injectable()
export class ApiService {
  constructor(
    @Inject(ApiUrlConfig) private url,
    private http: HttpClient
  ) { }

  getList(queryParams: IQueryParams): Observable<any> {
    const params = this.getParams(queryParams);
    return this.http.get(this.url, { params })
      .pipe(catchError(err => {
        return throwError(err);
      }));
  }

  private getParams(queryParams: IQueryParams): HttpParams {
    return Object.keys(queryParams)
      .reduce((acc, key) => ({ ...acc, [key]: String(queryParams[key]) }), <any> {});
  }
}
