import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'agency-x-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent { }
