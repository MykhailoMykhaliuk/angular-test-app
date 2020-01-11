import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListPageComponent } from './page/list-page/list-page.component';
import {
  PaginationComponent,
  SortComponent,
  ViewsComponent,
  AnswerDateComponent
} from './components';
import { ApiService } from './services';
import { ISort } from './interfaces';
import { ApiUrlConfig, SortConfig, DataService } from './di-tokens';
import { MomentPipe } from './pipes/moment/moment.pipe';

export * from './interfaces';

export abstract class AbstractDataService {
  abstract getPreparedData(data: any): any[];
}

@NgModule({
  declarations: [
    ListPageComponent,
    PaginationComponent,
    SortComponent,
    ViewsComponent,
    AnswerDateComponent,
    MomentPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ListPageComponent,
    ViewsComponent,
    AnswerDateComponent
  ]
})
export class ListModule {
  static forRoot(url: string, sortConfig: ISort[], dataService): ModuleWithProviders {
    return {
      ngModule: ListModule,
      providers: [
        ApiService,
        {
          provide: ApiUrlConfig,
          useValue: url
        },
        {
          provide: SortConfig,
          useValue: sortConfig
        },
        {
          provide: DataService,
          useClass: dataService
        }
      ]
    };
  }
}
