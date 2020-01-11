import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IPaginationConfig } from '../../interfaces';

@Component({
  selector: 'la-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {
  @Input() total: number;
  @Input() paginationConfig: IPaginationConfig;
  @Output() paginationChanged: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
}
