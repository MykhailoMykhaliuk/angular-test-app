import { InjectionToken } from '@angular/core';
import { ISort } from '../interfaces';
import { AbstractDataService } from '../list.module';

export const ApiUrlConfig = new InjectionToken<string>('ApiUrlConfig');
export const SortConfig = new InjectionToken<ISort>('SortConfig');
export const DataService = new InjectionToken<AbstractDataService>('DataService');