import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ISort } from '../../interfaces';
import { SortService } from '../../services';
import { SortConfig } from '../../di-tokens';

@Component({
  selector: 'la-sort',
  templateUrl: './sort.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortComponent implements OnInit {
  @Input() sortBy: string;
  @Output() sortingChanged: EventEmitter<ISort> = new EventEmitter<ISort>();
  
  selectedSortOption: ISort;

  constructor(
    private sortService: SortService,
    @Inject(SortConfig) protected sortConfigs
  ) { }

  ngOnInit() {
    this.selectedSortOption = this.sortService.getSelectedSortConfig(this.sortConfigs, this.sortBy);
  }
}
