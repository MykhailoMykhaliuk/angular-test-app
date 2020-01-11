import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'la-answer-date',
  templateUrl: './answer-date.component.html',
  styleUrls: ['./answer-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswerDateComponent {
  @Input() date: moment.Moment;
  @Input() format: string = 'll';
}
