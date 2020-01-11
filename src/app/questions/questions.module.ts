import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ListModule, ISort } from '../list/list.module';
import { QuestionsPageComponent } from './page/questions-page/questions-page.component';
import { QuestionCardComponent } from './components'
import { DataService } from './services'

const questionsApiUrl = 'https://stage.legaladviceme.com/api/search?entities=questions';

const sortConfig: ISort[] = [
  {
    title: 'Date (newest first)',
    config: 'date:desc'
  },
  {
    title: 'Date (oldest first)',
    config: 'date:asc'
  },
  {
    title: 'Views (999-0)',
    config: 'views:desc'
  },
  {
    title: 'Views (0-999)',
    config: 'views:asc'
  }
];

@NgModule({
  declarations: [
    QuestionsPageComponent,
    QuestionCardComponent
  ],
  imports: [
    MatCardModule,
    ListModule.forRoot(questionsApiUrl, sortConfig, DataService),
  ],
  providers: [],
  bootstrap: []
})
export class QuestionsModule { }
