import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IQuestion } from '../../interfaces';

@Component({
  selector: 'la-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionCardComponent {
  @Input() question: IQuestion;
}
