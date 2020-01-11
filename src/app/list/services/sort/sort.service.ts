import { Injectable, Inject } from '@angular/core';
import { ISort } from '../../interfaces';
import { SortConfig } from '../../di-tokens';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  constructor(@Inject(SortConfig) protected sortConfigs) {}
  
  getSelectedSortConfig(sortConfigs: ISort[], sortBy: string): ISort {
    const sortConfig = this.findSortConfig(sortConfigs, sortBy);
    return sortConfig ? sortConfig : this.defaultSortConfig;
  }

  findSortConfig(sortConfigs: ISort[], sortBy: string): ISort {
    return sortConfigs.find(({ config }: ISort) => config === sortBy);
  }

  get defaultSortConfig() {
    return this.sortConfigs[0];
  }
}
