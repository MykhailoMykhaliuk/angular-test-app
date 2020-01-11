import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'la-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewsComponent {
  @Input() views: number = 0;
}
